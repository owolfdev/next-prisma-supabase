import type { NextApiRequest, NextApiResponse } from "next";
import { getUsers } from "../../helpers/prisma-helper";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  async function main() {
    const user = await getUsers();
    res.end(JSON.stringify(user));
  }
  main();
  res.status(200);
}
