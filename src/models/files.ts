import mongoose from "mongoose";

const schema = new mongoose.Schema({
  URL: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Files = mongoose.model("Files", schema);
