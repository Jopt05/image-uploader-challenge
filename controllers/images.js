const { response } = require('express');

const cloudinary = require('cloudinary').v2
cloudinary.config( process.env.CLOUDINARY_URL )

const imagesPost = async(req , res = response) =>{

    const { tempFilePath } = req.files.archivo;

    const { secure_url } = await cloudinary.uploader.upload( tempFilePath );

    res.json({
        url: secure_url
    });
}

module.exports = {
    imagesPost
}