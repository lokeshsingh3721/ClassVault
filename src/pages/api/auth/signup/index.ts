import { NextApiHandler } from "next";
import { Student, Teacher } from "../../../../models/index";

const handler: NextApiHandler = async (req, res) => {
  let data: SignUp;
  if (req.body.userType === "student") {
    delete req.body.userType;
    data = await Student.create(req.body);
  } else {
    delete req.body.userType;
    data = await Teacher.create(req.body);
  }

  res.json({
    done: "signup",
    data,
  });
};

export default handler;
