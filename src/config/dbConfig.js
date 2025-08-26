import mongoose from "mongoose";

export const dbConnect = async () => {
  if (!process.env.MONGO_URL) {
    throw new error("Please provide MONGO_URL!");
  }
  return await mongoose.connect(process.env.MONGO_URL);
};
