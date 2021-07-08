const express = require("express");
const postContact = require("../service/contacts/postContact");
const getAllContacts = require("../service/contacts/getAllContacts");
const { checkUserIsAdmin } = require("../middlewares/checkRole");
const router = express.Router();

router.get("/", checkUserIsAdmin, getAllContacts);
router.post("/", postContact);

module.exports = router;
