const userModel = require("../models/userModel")
const registerController =async (req, res) => {
    try{
        const existingUser = await userModel.findOne({email:req.body.email})
        //checking validation
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:"User already exists"
            })
        }

    } catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in register api',
            error
        })
    }
};

module.exports = {registerController};
