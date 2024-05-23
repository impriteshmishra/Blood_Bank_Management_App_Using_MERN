const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
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
        // hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword; // replacing password
        // rest data
        const user = new userModel(req.body);
        await user.save();
        return res.status(201).send({
            success: true,
            message: "User Registerd Successfully",
        })

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
