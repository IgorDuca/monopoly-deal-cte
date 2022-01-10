import type { NextApiRequest, NextApiResponse } from 'next'
import { tableType } from '../../../bin/types/table/tableType';

import createTable from '../../../bin/scripts/table/createTable'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<tableType | string>
) {
    if(req.method !== 'GET') {
        return res.status(404).json("Request needs to be 'GET'")
    } else {
        var newTable: tableType = await createTable.create();

        return res.status(200).json(newTable);
    }
}
