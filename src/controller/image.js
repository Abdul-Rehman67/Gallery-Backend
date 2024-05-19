const { response } = require("../dto/send.response");
const Image = require("../models/Image");
const User = require("../models/User");
const { uploadImageService, getImagesOFUser, deleteImageService } = require("../services/image");



const uploadImage = async (req, res) => {
    try{

        console.log("req.body",req.body)
        const result = await uploadImageService(req) 
        console.log(result);
        if(result.uploaded){
            return res.send(response(result.uploaded, result.message));
        }
        else{
            return res.send(response(result.uploaded,result.message,{}));

    
        }
    }
    catch(e){
        console.log(e)
        return res.send(response(false,"An unknown error occured",{}));
        
    }
   
};
const getImageController = async (req,res) =>{
const id = req.params.id;
const result = await getImagesOFUser(id)
  if (result) {
    return res.send(response(true, "Data Found", { result }));
  } else {
    return res.send(response(false, "Not Found"));
  }

}

const deleteImageController = async (req,res) =>{
    const id = req.params.id
    let deleteImage = await deleteImageService(id);
    if (deleteImage) {
        return res.send(response(true, "Delete",{}));
      } else {
        return res.send(response(false, "Not Found"));
      }

}
  
  module.exports = { uploadImage,getImageController,deleteImageController };
  