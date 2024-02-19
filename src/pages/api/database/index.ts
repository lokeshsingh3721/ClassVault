import { dbConnect } from "./../../../lib/database";

import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  dbConnect();
  res.json({ done: "ok" });
};

export default handler;
