import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

import { tableType } from '../../types/table/tableType';

class createTable {
    public async create(): Promise<tableType> {
        var newTable = await prisma.table.create({data: {}});

        return newTable
    }
}

export default new createTable()