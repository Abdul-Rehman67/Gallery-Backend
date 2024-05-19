const { response } = require("../dto/send.response");
const { getUserByEmail, getAllUser } = require("../services/userService");

const getUserController = async (req, res) => {
  const id = req.params.id;
  console.log(id)
  let data = await getUserByEmail(id);
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
  const emailId = req.email;
  const payload = req.body;
  // console.log("payload", payload);
 
};
module.exports = { getUserController, updateUser,getAllUserController };
