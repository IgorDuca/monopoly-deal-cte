import type { NextApiRequest, NextApiResponse } from 'next'

import { playerType } from '../../../../../../bin/types/table/players/playerType';

import createPlayer from '../../../../../../bin/scripts/table/players/createPlayer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<playerType | string>
) {
    if(req.method !== 'GET') {
        return res.status(404).json("Request needs to be 'GET'")
    } else {
        var { tableId, playerName } = req.query;
    
        var unique = (data: any): string => { return data }
        if(unique(tableId) === "undefined") return res.status(401).json("Missing tableId parameter");
        if(unique(playerName) === "undefined") return res.status(401).json("Missing playerName parameter");

        var newPlayer = await createPlayer.create(unique(tableId), unique(playerName));

        return res.status(200).json(newPlayer);
    }
}
