import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class createLog {
    public async newPlayer(playerName: string, tableId: string) {
        return await prisma.log.create({
            data: {
                tableId: tableId,
                text: `${playerName} entrou no jogo.`
            }
        });
    };

    public async drawCards(playerId: string, tableId: string, amount: number) {
        return await prisma.log.create({
            data: {
                tableId: tableId,
                text: `${(await foundPlayer(playerId))?.name} sacou ${amount} cartas.`
            }
        });
    };

    public async createDeck(tableId: string) {
        return await prisma.log.create({
            data: {
                tableId: tableId,
                text: `Cartas embaralhadas.`
            }
        });
    };

    public async playCard(cardName: string, tableId: string, playerName: string) {
        return await prisma.log.create({
            data: {
                tableId: tableId,
                text: `${playerName} jogou ${cardName}.`
            }
        });
    };

    public async birthdayCard(playerName: string, tableId: string) {
        return await prisma.log.create({
            data: {
                tableId: tableId,
                text: `Todos os jogadores precisam pagar 2$ para ${playerName}`
            }
        });
    };

    public async forcedDeal(playerId: string, cardId: string, tableId: string) {
        var player = await prisma.player.findUnique({ where: { id: playerId } });
        var card = await prisma.card.findUnique({ where: { id: cardId } });
        var playerUnique = (data: any) => { return data };
        var targetPlayer = await prisma.player.findUnique({ where: { id: playerUnique(card?.playerId) } });

        return await prisma.log.create({
            data: {
                tableId: tableId,
                text: `O jogador ${player?.name} roubou a carta ${card?.type} do jogador ${targetPlayer?.name}`
            }
        });
    }
}

async function foundPlayer(id: string) { return await prisma.player.findUnique({ where: { id: id} }) }

export default new createLog();