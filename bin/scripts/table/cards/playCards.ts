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
            }
        });

        if(card?.playerId === null) return { sucess: false, message: "This card is not linked with any player" };

        var cardName = (card: any) => { return card.type }

        createLog.playCard(cardName(card), tableId, player.name);

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