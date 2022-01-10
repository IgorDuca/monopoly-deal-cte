import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

class addCard {
    public async add(cardId: string) {
        return await prisma.card.update({
            where: {
                id: cardId
            },
            data: {
                isPlayed: true
            }
        });
    };
};

export default new addCard();