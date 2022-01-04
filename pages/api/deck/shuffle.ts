import type { NextApiRequest, NextApiResponse } from 'next'

import claimDeck from '../../../bin/scripts/cards/claimDeck'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method != 'GET') return res.status(500).json("Request needs to be GET")
  else {
    return res.status(200).json(claimDeck.shuffleDeck());
  };
};
