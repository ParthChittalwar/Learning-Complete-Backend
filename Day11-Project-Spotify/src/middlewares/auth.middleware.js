const jwt = require("jsonwebtoken");

const authArtist = async (req,res,next) => {

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message : "Unauthorized User"
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(decoded.role !== "artist"){
            return res.status(401).json({
                message : "You Dont Have Access"
            })
        }
        req.user = decoded;
        next();
    }
    catch(err){
        return res.status(401).json({
            message : "Unauthorized User"
        })
    }
}

const authUser = async (req,res,next) => {

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message : "Unauthorized User"
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(decoded.role !== "user" && decoded.role !== "artist"){
            return res.status(401).json({
                message : "You Dont Have Access"
            })
        }
        req.user = decoded;
        next();
    }
    catch(err){
        return res.status(401).json({
            message : "Unauthorized User"
        })
    }
}

module.exports = {authArtist , authUser};