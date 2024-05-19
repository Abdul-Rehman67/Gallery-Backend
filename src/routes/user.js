
const express = require('express');
const { getUserController, updateUser, getAllUserController } = require('../controller/user');
const { userChecker } = require('../middlewares/tokenVerofication');

const router = express.Router()
router.get('/get-user-data/:id',getUserController)
router.get('/get-all-user-data',getAllUserController)
router.post('/update-user',userChecker,updateUser)
module.exports=router