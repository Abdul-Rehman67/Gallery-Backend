const userSchema = require("../models/User");
const bcrypt = require("bcryptjs")
const getUserByEmail = async (email) => {
  return await userSchema.findOne({email:email});
};
const isPasswordMatch = async (password, email) => {
  console.log(password)
  let user = await getUserByEmail(email);
  console.log(user);
  if (user) {
    let compare = await bcrypt.compare(password, user.password);
    console.log(compare)
    return compare;
  }
};
const getAllUser = async () => {
  return await userSchema.find();
};
module.exports = { getUserByEmail, isPasswordMatch,getAllUser };
