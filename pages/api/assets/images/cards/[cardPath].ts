import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
    var { cardPath } = req.query;
    var unique = (cardPath: any): string => { return cardPath }
    if(unique(cardPath) === "undefined") return res.status(401).json("Missing card path");

    var length = unique(cardPath).split("-").length;
    var path = `./assets/${unique(cardPath)}`;

    for(var i = 0; i < length; i++) {
      path = path.replace("-", "/")
    }

    console.log(path);
    return res.status(200).send(fs.readFileSync(path));
};
