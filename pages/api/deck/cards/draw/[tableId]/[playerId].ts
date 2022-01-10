import type { NextApiRequest, NextApiResponse } from 'next'

import drawCards from '../../../../../../bin/scripts/cards/drawCards'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    var { tableId, playerId } = req.query;
    
    var unique = (data?: any): string => { return data }
    if(unique(tableId) === "undefined") return res.status(401).json("Missing tableId parameter");
    if(unique(playerId) === "undefined") return res.status(401).json("Missing playerId parameter");

    if(req.method != 'GET') return res.status(404).json("Request needs to be GET")
    else {
      var selected_cards = await drawCards.draw(unique(tableId), unique(playerId));

      if(selected_cards === null) return res.status(404).json("Erro ao sacar cartas. Verifique os dados fornecidos.")
      else return res.status(200).json(selected_cards);
    };
};
