import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: 1,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  contact: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    default: "user",
  },
  refreshJWT: {
    type: String,
  },
});

export default mongoose.model("user", UserSchema);
