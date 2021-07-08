var express = require("express");
const {
  fieldValidation,
  emailValidation,
  passwordValidation,
  lastnameValidation,
  nameValidation,
} = require("../middlewares/field-validations");
const { register } = require("../service/users/register");
const { login, getUsers } = require("../service/users/login");
const verifyToken = require("../middlewares/verifyToken");
const getDataAuthUser = require("../controllers/users/getDataAuthUser");
const { deleteUser } = require("../service/users/delete");
var router = express.Router();

/* GET users by Admin. */
router.get("/", getUsers);

/* POST users listing. */
router.post(
  "/auth/register",
  [
    nameValidation,
    lastnameValidation,
    emailValidation,
    passwordValidation,
    fieldValidation,
  ],
  register
);

router.post(
  "/auth/login",
  [emailValidation, passwordValidation, fieldValidation],
  login
);

router.get("/auth/me", verifyToken, getDataAuthUser);
router.delete("/auth/delete/:id", deleteUser);

module.exports = router;
