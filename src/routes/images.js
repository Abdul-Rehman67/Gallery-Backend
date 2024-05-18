const express = require('express')
const { uploadFile } = require('../controller/image');
const upload = require('../util/multerConfig');

const router = express.Router()

// router.post('/upload-image', uploadFile)
router.post('/upload-image', upload.single('image'), uploadFile);

module.exports = router
