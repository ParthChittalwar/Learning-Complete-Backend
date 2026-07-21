const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const mongoose = require("mongoose");

const connectDB = async () => {

    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
    }catch(error){
        console.log("DB connection error : ",error);
    }
}

module.exports = connectDB;