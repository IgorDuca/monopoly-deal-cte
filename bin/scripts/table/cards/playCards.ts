import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

import createLog from '../../logs/creteLog';
import cardTypeHandler from '../../misc/cardTypeHandler';

class addCard {
    public async play(cardId: string, tableId: string, playerId: string) {
        var card = await prisma.card.findUnique({ where: { id: cardId } });

        var player = await prisma.player.findUnique({
            where: {
                id: playerId
            },
            include: {
                cards: true
            }
        });

        if(card?.playerId === null) return { sucess: false, message: "This card is not linked to any player" };

        var cardName = (card: any) => { return card.type };
        var playerName = (name: any) => { return name };

        createLog.playCard(cardName(card), tableId, playerName(player?.name));

        var playerCard = player?.cards.map(card => {
            if(card.id === cardId) return card
        });

        if(playerCard === undefined) return;
        if(playerCard.length === 0) return { sucess: false, message: `The player ${playerName(player?.name)} doesn't have any ${card?.type} card` };

        await prisma.card.update({
            where: {
                id: cardId
            },
            data: {
                isPlayed: true
            }
        });

        await cardTypeHandler(cardName(card), tableId, playerId);

        return await prisma.card.findUnique({ where: { id: cardId } });
    };
};

export default new addCard();