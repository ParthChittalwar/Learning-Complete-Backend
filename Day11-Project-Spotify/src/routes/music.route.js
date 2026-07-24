const express = require("express");
const musicController = require("../controllers/music.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const multer = require("multer");

const upload = multer({
    storage : multer.memoryStorage()
})

const router = express.Router();

router.post("/upload" , authMiddleware.authUser , upload.single("file") , musicController.createMusic);
router.post("/album" , authMiddleware.authUser , musicController.createAlbum);
router.get("/" , authMiddleware.authUser , musicController.getAllMusics);
router.get("/album" , authMiddleware.authUser , musicController.getAllAlbums);
router.get("/album/:albumId" , authMiddleware.authUser , musicController.getAlbumById);

module.exports = router;