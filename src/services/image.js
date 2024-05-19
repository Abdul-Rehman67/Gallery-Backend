const Image = require('../models/Image');
const User = require('../models/User');
const { getUserByEmail } = require('./userService');
const fs=require('fs')

const uploadImageService = async (req) => {
    const file = req.file;
    const isPrivate = req.body.isPrivate === 'true';
    const user = await getUserByEmail(req.id)
    console.log("user",user)
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
            user:user.id
        });
        await newImage.save()
        return { uploaded: true, message:"File uploaded successfully" };
    } catch (error) {
        console.log(error)
        return { uploaded: false, message:"An unknown error occured please try again later" };

    }
};

const getImagesOFUser = async(id)=>{
  return await  Image.find({user:id})
}

const deleteImageService = async (imageId)=>{
  try {
    const image = await Image.findById(imageId);
    console.log("image",image)
    if (!image) {
      return { uploaded: false, message:"Image not found" };
    }
    fs.unlinkSync(image.path);

    let deleteImage =  await Image.findByIdAndDelete(imageId)
    console.log("deleteImage",deleteImage)
    return { uploaded: true, message:"Image Deleted Successfully" };
  } catch (error) {
    return { uploaded: false, message:"Error" };

  }
}

module.exports={uploadImageService,getImagesOFUser,deleteImageService}