import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

class fetchCards {
    public async search(deckId: string) {
        var cards = await prisma.card.findMany({
            where: {
                isPlayed: true,
                deckId: deckId
            }
        });

        return cards;
    };
};

export default new fetchCards();