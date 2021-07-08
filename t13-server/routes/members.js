const express = require("express");
const { updateMember } = require("../service/members/updateMember");
const deleteMembers = require("./../service/members/deleteMembers");
const router = express.Router();
const getMembers = require("../service/members/getMembers");

router.put("/:id", updateMember);
router.delete("/:id", deleteMembers);
router.get("/", getMembers);
module.exports = router;
