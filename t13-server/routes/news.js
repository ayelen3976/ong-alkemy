var express = require("express");
const {
  titleValidation,
  contentValidation,
  imageValidation,
  typeValidation,
  fieldValidation,
} = require("../middlewares/field-validations");
const deleteNew = require("../service/news/deleteNew");
const getNew = require("../service/news/getNew");
const postNew = require("../service/news/postNew");
var router = express.Router();
/* GET News listing. */
router.get("/:id", getNew);

/* POST News listing. */
router.post(
  "/",
  [
    titleValidation,
    contentValidation,
    imageValidation,
    typeValidation,
    fieldValidation,
  ],
  postNew
);

/* DELETE News listing. */

router.delete("/:id", deleteNew);
module.exports = router;
