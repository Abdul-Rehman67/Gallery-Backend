const { response } = require("../dto/send.response");
const { getUserByEmail, getAllUser, getUserById, updateUserService } = require("../services/userService");

const getUserController = async (req, res) => {
  const id = req.params.id;
  console.log(id)
  let data = await getUserById(id);
  console.log(data);
  if (data) {
    return res.send(response(true, "Data Found", { data: data }));
  } else {
    return res.send(response(false, "Not Found"));
  }
};
const getAllUserController = async (req, res) => {
  let data = await getAllUser();
  console.log(data);
  if (data) {
    return res.send(response(true, "Data Found", { data: data }));
  } else {
    return res.send(response(false, "Not Found"));
  }
};
const updateUser = async (req, res) => {
  console.log(req.body)
  const id = req.body.userData._id
  const payload = req.body.userData
  const update =await updateUserService(id,payload)
  if(update.updated){
    return res.send(response(true, "User Updated"));
  }
  else{
    return res.send(response(false, "Failed to update profile"));

  }

 
};
module.exports = { getUserController, updateUser,getAllUserController };
