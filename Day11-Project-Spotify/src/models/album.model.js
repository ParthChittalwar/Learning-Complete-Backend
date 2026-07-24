const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema ({
    title : {
        type : String,
        required : true
    },
    music : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: "music",
        required : true
    }],
    artist : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "artist",
        required : true
    }
})

const musicModel = mongoose.model("album",albumSchema);

module.exports = musicModel;