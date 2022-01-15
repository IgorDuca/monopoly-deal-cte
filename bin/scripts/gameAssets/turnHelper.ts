import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

class turnHelper {
    public async passTurn(tableId: string) {
        var table = await prisma.table.findUnique({ where: { id: tableId } });

        var turn = table?.turn;
        if(turn === undefined) turn = 1;

        await prisma.table.update({
            where: { id: tableId },
            data: { turn: turn + 1 }
        });

        return await prisma.table.findUnique({ where: { id: tableId } });
    }
};

export default new turnHelper();