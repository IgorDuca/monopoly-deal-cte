import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method !== 'POST') {
        return res.status(404).json("Request needs to be 'POST'")
    } else {
        var { deckId } = req.query;
        var unique = (data: any): string => { return data }
        if(unique(deckId) === "undefined") return res.status(401).json("Missing deckId parameter");
        var deck = await prisma.deck.findUnique({ where: { id: unique(deckId) } });
        if(deck === null) return res.status(505).json("Deck not found");
        var table = await prisma.table.findUnique({ where: { id: unique(deck.tableId) }});
        if(table === null) return res.status(505).json("Table not found");
        
        if(req.body.isPlayed === true) return res.status(200).json(await prisma.card.findMany({ where: { deckId: deck.id, isPlayed: true } }));
        else return res.status(200).json(await prisma.card.findMany({ where: { deckId: deck.id } }));
    }
}
