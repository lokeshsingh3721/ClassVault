import { NextApiHandler } from "next";
import { Student, Teacher } from "../../../../models/index";

const handler: NextApiHandler = async (req, res) => {
  try {
    let data: SignUp;
    if (req.body.userType === "student") {
      delete req.body.userType;
      data = await Student.create(req.body);
    } else {
      delete req.body.userType;
      data = await Teacher.create(req.body);
    }

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.json({
        message: error.message,
      });
    }
  }
};

export default handler;
