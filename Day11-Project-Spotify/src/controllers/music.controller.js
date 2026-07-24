const musicModel = require("../models/music.model");
const albumModel = require("../models/album.model");
const {uploadFile} = require("../services/storage.service");
const jwt = require("jsonwebtoken");

const createMusic = async (req,res) => {

    const {title} = req.body;
    const file = req.file;

    const result = await uploadFile(
        file.buffer.toString("base64")
    )

    const music = await musicModel.create({
        title,
        uri : result.url,
        artist : req.user.id
    });

    res.status(201).json({
        message : "Music Created Successfully",
        music : {
            id : music._id,
            title : music.title,
            uri : music.uri,
            artist : music.artist
        }
    })
}

const createAlbum = async (req,res) => {

    const {title,music} = req.body;

    const album = await albumModel.create({
        title,
        music,
        artist : req.user.id
    });

    res.status(201).json({
        message : "Album Created Successfully",
        album : {
            id : album._id,
            title : album.title,
            music : album.music,
            artist : album.artist
        }
    })
}

const getAllMusics = async (req,res) => {
    
    const musics = await musicModel.find().populate("artist","username email");

    res.status(200).json({
        message : "All Musics Fetched Successfully",
        musics : musics
    })
}

const getAllAlbums = async (req,res) => {
    
    const albums = await albumModel.find().populate("artist","username email");

    res.status(200).json({
        message : "All Albums Fetched Successfully",
        albums : albums
    })
}

const getAlbumById = async (req,res) => {

    const albumId = req.params.id;

    const album = await albumModel.findById(albumId).populate("artist","username email").populate("musics");

    res.status(200).json({
        message : "Album Fetched Successfully",
        album : album
    })
}

module.exports = {
    createMusic,
    createAlbum,
    getAllMusics,
    getAllAlbums,
    getAlbumById
}