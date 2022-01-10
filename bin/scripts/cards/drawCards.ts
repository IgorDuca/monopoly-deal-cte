import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

import createLogs from '../logs/creteLog';

class drawCards {
    public async draw(tableId: string, playerId: string, card_amount?: number): Promise<any[] | null> {
      var player = await prisma.player.findUnique({ where: { id: playerId } });

      if(player !== null) {
        var cards = await prisma.card.count();
        const skip = Math.floor(Math.random() * cards);
        var amount = 0;

        var table = await prisma.table.findUnique({where: { id: tableId }, include: { deck: true }});

        if(table?.turn === 1) amount += 5
        else amount += 2;

        var selected_cards;

        if(card_amount) {
          selected_cards = await prisma.card.findMany({
            take: card_amount,
            skip: skip,
            where: { deckId: table?.deck[0].id }
          });
          
          await createLogs.drawCards(playerId, tableId, card_amount);
        } else {
          selected_cards = await prisma.card.findMany({
            take: amount,
            skip: skip,
            where: { deckId: table?.deck[0].id }
          });

          await createLogs.drawCards(playerId, tableId, amount);
        }
  
        selected_cards.forEach(async card => {
          await prisma.card.update({
            where: { id: card.id },
            data: {
              deckId: undefined,
              playerId: playerId
            }
          });
        });

        return selected_cards;
      } else return null;
    }
}

export default new drawCards();