import { createNewUser } from "../models/UserModel.js";
import { hashedPassword } from "../utils/bcrypt.js";
import { responseClient } from "../middleware/responseClient.js";
export const insertNewUser = async (req, res, next) => {
  try {
    //todo signup

    //recieve the user data
    //encrypt the password
    const { password } = req.body;
    req.body.password = hashedPassword(password);

    //insert into DB
    const user = await createNewUser(req.body);

    if (user?._id) {
      // create an unique user activation link and send to their email
      const message =
        "We have sent you an email with activation link. Please check your email and follow the instruction to activate your account!";

      return responseClient({ req, res, message });
    }
    throw new error("Unable to create an account, try again later! ");
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.message =
        "The email already exists for another user, try different email or login!";
      error.statusCode = 400;
    }
    next(error);
  }
};
