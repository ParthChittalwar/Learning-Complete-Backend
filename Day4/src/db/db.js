const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const mongoose =  require("mongoose");

const  connectDB = async () => {

    await mongoose.connect("mongodb+srv://BackendUser:parth24@learnbackend.mjtlrda.mongodb.net/Great?appName=LearnBackend")
    console.log("Database Connected Successfully");
    
}

module.exports = connectDB