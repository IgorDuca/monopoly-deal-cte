import type { NextApiRequest, NextApiResponse } from 'next';

import fetchCards from '../../../../../bin/scripts/table/cards/fetchCards';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method !== 'GET') {
        return res.status(404).json("Request needs to be 'GET'")
    } else {
        var { deckId } = req.query;
        var unique = (data: any): string => { return data }
        if(unique(deckId) === "undefined") return res.status(401).json("Missing deckId parameter");

        return await fetchCards.search(unique(deckId));
    }
}
