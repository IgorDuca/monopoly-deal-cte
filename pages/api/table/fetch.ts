import type { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    var tables = await prisma.table.findMany({ include: { players: true } })

    return res.status(200).json(tables)
}
