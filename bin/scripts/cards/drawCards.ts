import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

import createLogs from '../logs/creteLog';

class drawCards {
    public async draw(tableId: string, playerId: string): Promise<any[] | null> {
      var player = await prisma.player.findUnique({ where: { id: playerId } });

      if(player !== null) {
        var cards = await prisma.card.count();
        const skip = Math.floor(Math.random() * cards);
        var amount = 0;

        var table = await prisma.table.findUnique({where: { id: tableId }, include: { deck: true }});

        if(table?.turn === 1) amount += 5
        else amount += 3;

        const selected_cards = await prisma.card.findMany({
          take: amount,
          skip: skip,
          where: { deckId: table?.deck[0].id }
        });
  
        selected_cards.forEach(async card => {
          await prisma.card.update({
            where: { id: card.id },
            data: {
              deckId: undefined,
              playerId: playerId
            }
          });
        });

        await createLogs.drawCards(playerId, tableId, amount);

        return selected_cards;
      } else return null;
    }
}

export default new drawCards();