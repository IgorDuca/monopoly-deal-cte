import type { NextApiRequest, NextApiResponse } from 'next';
import addCard from '../../../../../bin/scripts/table/cards/addCard';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method !== 'POST') {
        return res.status(404).json("Request needs to be 'POST'")
    } else {
        var playedCard = await addCard.add(req.body.cardId);
        return playedCard;
    }
}
