import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

import { playerType } from "../../../types/table/players/playerType";
import createLogs from "../../logs/creteLog"

class createPlayer {
    public async create(tableId: string, name: string): Promise<playerType | any> {

        var table = await prisma.table.findUnique({
            where: { id: tableId }
        });

        if(table === null) return { sucess: false, message: "This table doesn't exists" };

        var newPlayer = await prisma.player.create({
            data: {
                tableId: tableId,
                name: name
            }
        });

        await createLogs.newPlayer(name, tableId);
        
        return newPlayer;
    }
}

export default new createPlayer();