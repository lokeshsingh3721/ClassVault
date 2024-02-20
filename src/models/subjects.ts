import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Subject =
  mongoose.models.Subject ?? mongoose.model("Subject", schema);
