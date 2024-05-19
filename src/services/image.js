const Image = require('../models/Image');
const User = require('../models/User');

const uploadImageService = async (req) => {
    const file = req.file;
    const isPrivate = req.body.isPrivate === 'true';
    if (!file) {
        return { uploaded: false, message:"No file found!" };
    }
    const fileUrl = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;
    try {
        const newImage = new Image({
            filename: file.filename,
            path: file.path,
            url: fileUrl,
            isPrivate: isPrivate,
            user:req.id
        });
        await newImage.save()
        return { uploaded: true, message:"File uploaded successfully" };
    } catch (error) {
        console.log(error)
        return { uploaded: false, message:"An unknown error occured please try again later" };

    }
};

module.exports={uploadImageService}