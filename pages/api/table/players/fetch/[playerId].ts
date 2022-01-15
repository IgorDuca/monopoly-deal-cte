import type { NextApiRequest, NextApiResponse } from 'next'

import { playerType } from '../../../../../bin/types/table/players/playerType';
import findPlayer from '../../../../../bin/scripts/table/players/findPlayer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<playerType | string>
) {
    if(req.method !== 'GET') {
        return res.status(404).json("Request needs to be 'GET'")
    } else {
        var { playerId } = req.query;
    
        var unique = (data: any): string => { return data }
        if(unique(playerId) === "undefined") return res.status(401).json("Missing playerId parameter");

        return res.status(200).json(await findPlayer(unique(playerId)));
    }
}
