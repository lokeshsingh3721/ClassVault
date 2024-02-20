import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Semester =
  mongoose.models.Semester ?? mongoose.model("Semester", schema);
