import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

import type { NextApiRequest, NextApiResponse } from 'next'

import claimDeck from '../../../../../../bin/scripts/deck/claimDeck'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    var { deckId, amount } = req.query;
    
    var unique = (deckId?: any, amount?: any): string => { return deckId }
    if(unique(deckId) === "undefined") return res.status(401).json("Missing deckId parameter");
    if(unique(amount) === "undefined") return res.status(401).json("Missing amount parameter");

    if(req.method != 'GET') return res.status(404).json("Request needs to be GET")
    else {
      var cards = await prisma.card.count();
      const skip = Math.floor(Math.random() * cards);
      const selected_cards = await prisma.card.findMany({
        take: parseInt(unique(amount)),
        skip: skip
      });

      selected_cards.forEach(async card => {
        await prisma.card.delete({
          where: { id: card.id }
        });
      });

      return res.status(200).json(selected_cards);
    };
};
