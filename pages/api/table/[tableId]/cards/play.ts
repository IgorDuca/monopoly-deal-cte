import type { NextApiRequest, NextApiResponse } from 'next';
import addCard from '../../../../../bin/scripts/table/cards/playCards';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method !== 'POST') {
        return res.status(404).json("Request needs to be 'POST'")
    } else {
        var { tableId } = req.query;
        var unique = (data: any): string => { return data };
        return res.json(await addCard.play(req.body.cardId, unique(tableId), req.body.playerId));
    }
}
