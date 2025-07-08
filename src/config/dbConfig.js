import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("Please provide MONGO_URL!");
    }
    const conn = await mongoose.connect(process.env.MONGO_URL);
    conn && console.log(`Database Connected!`);
  } catch (error) {
    console.log(error);
  }
};

// export const dbConnect = async () => {
//   try {
//     if (!process.env.MONGO_URL) {
//       throw new Error("Please provide mongo_url!");
//     }
//     const conn = mongoose.connect(process.env.MONGO_URL);
//     conn && console.log(`MongoDB is connected!`);
//   } catch (error) {
//     console.log(error);
//   }
// };
