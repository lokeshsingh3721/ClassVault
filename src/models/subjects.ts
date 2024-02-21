import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course", // Ensure this matches the model name in the Course schema
    unique: true,
  },
  semester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Semester", // Ensure this matches the model name in the Semester schema
    unique: true,
  },
});

export const Subject =
  mongoose.models.Subject ?? mongoose.model("Subject", schema);
