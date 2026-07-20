const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const mongoose = require("mongoose");

const connectDB = async () => {

    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DataBase Connected Successfully");

    }catch(err){
        console.log("DB connection error : ",err);
    }

}

module.exports = connectDB;