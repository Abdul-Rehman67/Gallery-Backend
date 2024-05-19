const express = require('express')
const {  uploadImage, getImageController, deleteImageController } = require('../controller/image');
const upload = require('../util/multerConfig');
const { userChecker } = require('../middlewares/tokenVerofication');
const { deleteImageService } = require('../services/image');

const router = express.Router()

// router.post('/upload-image', uploadFile)
router.post('/upload-image',userChecker, upload.single('image'), uploadImage);
router.get('/get-images/:id',getImageController)
router.get('/delete-images/:id',userChecker,deleteImageController)

module.exports = router
