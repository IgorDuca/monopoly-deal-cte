import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default async function findPlayer(playerId: string) {
    return await prisma.player.findUnique({ where: { id: playerId }, include: { cards: true } });
};