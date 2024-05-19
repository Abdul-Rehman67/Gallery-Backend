const { response } = require("../dto/send.response");
const Image = require("../models/Image");
const User = require("../models/User");
const { uploadImageService } = require("../services/image");



const uploadImage = async (req, res) => {
    try{

        console.log("req.body",req.body)
        const file = req.file;
        const isPrivate = req.body.isPrivate === 'true';
        console.log(file)
        console.log(req.id)
        // const result = await uploadImageService(file,req.id,isPrivate) 
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
  
  module.exports = { uploadImage };
  