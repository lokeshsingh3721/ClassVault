import { NextApiHandler } from "next";

import { Student, Teacher } from "../../../../../src/models/index";

const handler: NextApiHandler = async (req, res) => {
  const body: Login = req.body;

  if (body.userType === "student") {
    const data = await Student.find({
      username: body.email,
    });

    if (data.length == 0) {
      return res.json({
        success: false,
        message: "user doesn't exist ",
        data,
      });
    }

    const originalPass = data[0].password;

    if (originalPass != body.password) {
      return res.json({
        success: false,
        message: "invalid username/password",
        data,
      });
    }
    return res.json({
      success: true,
      message: "login success",
      data,
    });
  }
  if (body.userType === "teacher") {
    const data = await Teacher.find({
      username: body.email,
    });

    if (data.length == 0) {
      return res.json({
        success: false,
        message: "user doesn't exist ",
        data,
      });
    }

    const originalPass = data[0].password;

    if (originalPass != body.password) {
      return res.json({
        success: false,
        message: "invalid username/password",
        data,
      });
    }
    return res.json({
      success: true,
      message: "login success",
      data,
    });
  }
};

export default handler;
