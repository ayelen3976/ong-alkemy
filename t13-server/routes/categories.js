const express = require("express");
const getCategories = require("../service/categories/getCategories");
const { updateCategories } = require("../service/categories/updateCategories");
const deleteCategories = require("../service/categories/deleteCategories");
const getCategory = require("../service/categories/getCategory");

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategory);
router.put(
  "/:id",
  //verifyToken,
  updateCategories
);
router.delete("/:id", deleteCategories);

module.exports = router;
