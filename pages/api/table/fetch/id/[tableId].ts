import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method !== 'GET') {
        return res.status(404).json("Request needs to be 'GET'")
    } else {
        var { tableId } = req.query;
        var unique = (data: any): string => { return data }
        if(unique(tableId) === "undefined") return res.status(401).json("Missing tableId parameter");
        var table = await prisma.table.findUnique({ where: { id: unique(tableId) } });
        if(table === null) return res.status(505).json("Table not found");
        return res.status(200).json(table);
    }
}
