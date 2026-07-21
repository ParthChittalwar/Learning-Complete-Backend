const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const mongoose = require("mongoose");

const connectDB = async () => {

    await mongoose.connect(" ");
    console.log("Connected to Database Successfully");
}

module.exports = connectDB;