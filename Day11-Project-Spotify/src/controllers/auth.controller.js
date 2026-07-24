const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req,res) => {

    const {username , email , password,role} = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        $or:[
            {username},
            {email},
        ]
    });

    if(isUserAlreadyExists){
        return res.status(409).json({
            message : "User Already Exists"
        });
    }

    const hash = await bcrypt.hash(password , 10);

    const user = await userModel.create({
        username,
        email,
        password : hash,
        role,
    });

    const token = jwt.sign({
        id : user._id,
        role : user.role,
    },process.env.JWT_SECRET);

    res.cookie("token",token);

    res.status(201).json({
        message : "User Created Successfully",
        user : {
            id : user._id,
            username : user.username,
            email : user.email,
            role : user.role
        }
    });
}

const loginUser = async (req,res) => {

    const {username , email , password} = req.body;

    const user = await userModel.findOne({
        $or : [
            {username},
            {email},
        ]
    });

    if(!user){
        return res.status(401).json({
            message : "User Not Found"
        });
    }

    const isPasswordvalid = await bcrypt.compare(password , user.password);

    if(!isPasswordvalid){
        return res.status(401).json({
            message : "Invalid Password"
        });
    }

    const token = jwt.sign({
        id : user._id,
        role : user.role,
    },process.env.JWT_SECRET);

    res.cookie("token",token);

    res.status(200).json({
        message : "User Logged In Successfully",
        user : {
            id : user._id,
            username : user.username,
            email : user.email,
            role : user.role
        }
    });
}

const logoutUser = (req,res) => {
    res.clearCookie("token");
    res.status(200).json({
        message : "User Logged Out Successfully"
    });
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser
}