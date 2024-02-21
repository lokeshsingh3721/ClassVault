import { NextApiHandler } from "next";

import { Student, Teacher } from "../../../../../src/models/index";

const handler: NextApiHandler = async (req, res) => {
  if (req.body.userType === "student") {
    const student = await Student.find({
      username: req.body.email,
    });

    if (student.length == 0) {
      return res.json({
        success: false,
        message: "user doesn't exist ",
        student,
      });
    }

    const originalPass = student[0].password;

    if (originalPass != req.body.password) {
      return res.json({
        success: false,
        message: "invalid username/password",
        student,
      });
    }
    return res.json({
      success: true,
      message: "login success",
      student,
    });
  }
  if (req.body.userType === "teacher") {
    const teacher = await Teacher.find({
      username: req.body.email,
    });

    if (teacher.length == 0) {
      return res.json({
        success: false,
        message: "user doesn't exist ",
        teacher,
      });
    }

    const originalPass = teacher[0].password;

    if (originalPass != req.body.password) {
      return res.json({
        success: false,
        message: "invalid username/password",
        teacher,
      });
    }
    return res.json({
      success: true,
      message: "login success",
      teacher,
    });
  }
};

export default handler;
