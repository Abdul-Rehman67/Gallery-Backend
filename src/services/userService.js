const userSchema = require("../models/User");
const bcrypt = require("bcryptjs")
const getUserByEmail = async (email) => {
  return await userSchema.findOne({email:email});
};
const getUserById = async (id) => {
  return await userSchema.findById(id).select('-password');

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

const updateUserService = async (id, updateData) => {
  try {
    const updatedUser = await userSchema.findByIdAndUpdate(
      id,
      updateData,
      { new: true, select: '-password' } 
        );

    if (!updatedUser) {
      return { updated: false, message: 'User not found' };
    }
    return { updated: true, message: 'updated successfully' };
  } catch (e) {
    console.error(e); 
    return { updated: false, message: 'An unknown error occurred, please try again later' };
  }
};

module.exports = { getUserByEmail, isPasswordMatch,getAllUser,getUserById,updateUserService };
