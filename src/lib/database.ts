import mongoose, { mongo } from "mongoose";

// import {
//   College,
//   Student,
//   Course,
//   Subject,
//   Teacher,
//   Files,
//   Semester,
// } from "../models/index";

const URL = process.env.DATABASE as string;

export const dbConnect = async () => {
  try {
    mongoose.connect(URL);
    console.log("Database connected ");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
