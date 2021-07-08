const { response } = require("express");
const { validationResult } = require("express-validator");
const { check } = require("express-validator");

// ---------news validations--------------
const titleValidation = check("title", "title requerido").notEmpty();
const contentValidation = check("content", "content requerido").notEmpty();
const imageValidation = check("image", "image requerido").notEmpty();
const typeValidation = check("type", "type requerido").notEmpty();

// ---------user validations--------------
const nameValidation = check("firstName", "Nombre requerido").notEmpty();
const lastnameValidation = check("lastName", "Nombre requerido").notEmpty();

const emailValidation = check("email", "Email es requerido").isEmail();
const passwordValidation = check(
  "password",
  "El password debe ser de 3 carácteres"
).isLength({
  min: 5,
});

const organizationNameValidation = check("name", "Nombre requerido").notEmpty();
const organizationImageValidation = check(
  "image",
  "Imagen es requerida"
).notEmpty();

const fieldValidation = (req, res = response, next) => {
  //manejo de errores

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }
  next();
};

module.exports = {
  fieldValidation,
  emailValidation,
  passwordValidation,
  nameValidation,
  lastnameValidation,
  organizationNameValidation,
  organizationImageValidation,
  titleValidation,
  contentValidation,
  imageValidation,
  typeValidation,
};
