import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class createLog {
    public async newPlayer(playerName: string, tableId: string) {
        await prisma.log.create({
            data: {
                tableId: tableId,
                text: `${playerName} entrou no jogo.`
            }
        })
    };

    public async drawCards(playerId: string, tableId: string, amount: number) {
        await prisma.log.create({
            data: {
                tableId: tableId,
                text: `${(await foundPlayer(playerId))?.name} sacou ${amount} cartas.`
            }
        })
    };

    public async createDeck(tableId: string) {
        await prisma.log.create({
            data: {
                tableId: tableId,
                text: `Cartas embaralhadas.`
            }
        })
    }
}

async function foundPlayer(id: string) { return await prisma.player.findUnique({ where: { id: id} }) }

export default new createLog();