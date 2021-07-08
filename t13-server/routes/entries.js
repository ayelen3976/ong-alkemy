var express = require("express");
const getAllEntries = require("../service/entries/getAllEntries");
const updateEntry = require("../service/entries/updateEntry");
var router = express.Router();

router.get("/", getAllEntries);
router.put("/:id", updateEntry);

module.exports = router;
