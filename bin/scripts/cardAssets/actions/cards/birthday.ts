import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

import createLog from '../../../../scripts/logs/creteLog';

export default async function birthday(playerId: string, tableId: string) {
    var players: any[] = [];

    var player = await prisma.player.findUnique({ where: { id: playerId } });
    var playerName = (data: any) => { return data }

    (await prisma.player.findMany({ include: { cards: true } })).forEach(player => {
        if(player.id !== playerId) players.push(player)
    });

    players.forEach(player => {
        var normalCardRent = 0;
        var moneyRent = 0;

        player?.cards.forEach((card: any) => {
            if(card.value === null) card.value = 0;
            
            if(card.type === "money") {
                if(card.value >= 2) {
                    discountCard(card);
                } else {
                    moneyRent += card.value
                };
            } else normalCardRent += card.value
        });

        console.log({ player: player?.name, normalCardRent, moneyRent });
    });

    createLog.birthdayCard(playerName(player?.name), tableId);
};

function discountCard(card: any) {
    console.log(`Card to be discounted: ${card}`)
}