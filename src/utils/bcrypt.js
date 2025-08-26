import bcrypt from "bcryptjs";

const saltRound = 15;

export const hashedPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, saltRound);
};
