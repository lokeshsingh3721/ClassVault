import { Course, Semester, Subject, College } from "../../../models/index";

import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  try {
    const { college, semester, course, subject }: GetIdQuery = req.query;
    let data: GetId[] = [];

    console.log(college, semester, course, subject);

    if (!college && !semester && !course && !subject) {
      return res.json({
        success: false,
        message: "invalid query",
      });
    }

    if (college) {
      const fetchedData = await College.findOne({ name: college });
      if (fetchedData) {
        data.push(fetchedData);
      }
    }
    if (semester) {
      const fetchedData = await Semester.findOne({ name: semester });
      if (fetchedData) {
        data.push(fetchedData);
      }
    }
    if (course) {
      const fetchedData = await Course.findOne({ name: course });
      if (fetchedData) {
        data.push(fetchedData);
      }
    }
    if (subject) {
      const fetchedData = await Subject.findOne({ name: subject });
      if (fetchedData) {
        data.push(fetchedData);
      }
    }

    console.log(data);

    if (data.length === 0) {
      return res.json({
        success: false,
        message: "not exist",
      });
    }

    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.json({ error: error.message });
    }
  }
};

export default handler;
