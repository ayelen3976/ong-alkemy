const multer = require("multer");

const storage = multer.memoryStorage();
const storageImage = multer({ storage }).single("image");

module.exports = storageImage;
