var express = require("express");
var router = express.Router();

//var service = require('../../t13-server/service/organizations');
var service = require("../../t13-server/service/organizations/organization");
const {
  organizationNameValidation,
  fieldValidation,
} = require("../middlewares/field-validations");
const verifyToken = require("../middlewares/verifyToken");
const {
  updateOrganization,
} = require("../service/organizations/updateOrganization");

router.get("/:id/public", service.getById);

router.put(
  "/:id",
  [organizationNameValidation, fieldValidation],
  verifyToken,
  updateOrganization
);
module.exports = router;
