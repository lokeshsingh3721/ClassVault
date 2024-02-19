import { NextApiHandler } from "next";
import { Student, Subject } from "../../../../models/index";

const handler: NextApiHandler = async (req, res) => {
  // const data = await Student.create(req.body);
  const data = await Student.create(req.body);

  res.json({
    done: "signup",
    data,
  });
};

export default handler;
