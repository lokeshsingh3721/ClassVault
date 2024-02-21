import { Subject, Teacher } from "@/models";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  try {
    const TeacherId = "65d5c733475d159ca24de955";

    const data = await Teacher.findById(TeacherId)
      .populate("course")
      .populate("semester")
      .populate("college")
      .populate("subject")
      .exec();

    res.json({ message: "working", data });

    // console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;
