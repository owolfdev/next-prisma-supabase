import type { NextApiRequest, NextApiResponse } from "next";
import { getUsers } from "../../helpers/prisma-helper";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  async function main() {
    const users = await getUsers();
    res.status(200);
    res.end(JSON.stringify(users));
  }
  main();
}
