import type { NextApiRequest, NextApiResponse } from "next";
import { deleteUser } from "../../helpers/prisma-helper";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const req_body = JSON.parse(req.body);
  async function main() {
    const user = await deleteUser(req_body);
    res.status(200).json(user);
  }
  main();
}
