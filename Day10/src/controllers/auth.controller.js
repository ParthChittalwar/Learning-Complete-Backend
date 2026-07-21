const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const registerUser = async (req,res) => {

    const {username , email , password} = req.body;

    const isUserAlreadyExists = await userModel.findOne({email});

    if(isUserAlreadyExists){
        return res.status(400).json({
            message : "User Already Exists"
        });
    }

    const user = new userModel({username , email , password});

    await user.save();

    const token =jwt.sign({id : user._id} , process.env.JWT_SECRET);

    res.cookie("token",token);

    res.status(201).json({
        message : "User Created Successfully",
        user : user,
    });
}

module.exports = {
    registerUser
}

