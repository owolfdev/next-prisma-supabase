import type { NextApiRequest, NextApiResponse } from "next";
import { getUsers } from "../../lib/prisma-helper";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  async function main() {
    // const users = await getUsers();
    const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
    res.end(JSON.stringify(users));
  }
  main();
  res.status(200);
}
