import type { NextApiRequest, NextApiResponse } from 'next'

import claimDeck from '../../../../bin/scripts/deck/claimDeck'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    var { tableId } = req.query;
    var unique = (tableId: any): string => { return tableId }
    if(unique(tableId) === "undefined") return res.status(401).json("Missing tableId parameter");

    if(req.method != 'GET') return res.status(404).json("Request needs to be GET")
    else {
      return res.status(200).json(await claimDeck.shuffleDeck(unique(tableId)));
    };
};
