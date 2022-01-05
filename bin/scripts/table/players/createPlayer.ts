import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

import { playerType } from "../../../types/table/players/playerType";

class createPlayer {
    public async create(tableId: string, name: string): Promise<playerType> {
        var newPlayer = await prisma.player.create({
            data: {
                tableId: tableId,
                name: name
            }
        });
        
        return newPlayer;
    }
}

export default new createPlayer();