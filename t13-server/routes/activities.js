express = require("express");
const {
  organizationNameValidation,
  contentValidation,
  fieldValidation,
} = require("../middlewares/field-validations");
const verifyToken = require("../middlewares/verifyToken");
const { newActivity } = require("../service/activities/newActivity");
const { updateActivity } = require("../service/activities/updateActivity");
const { getActivities } = require("../service/activities/getActivities");
var router = express.Router();

router.post(
  "/new",
  [organizationNameValidation, contentValidation, fieldValidation],
  verifyToken,
  newActivity
);
router.put(
  "/:id",
  [organizationNameValidation, contentValidation, fieldValidation],
  //verifyToken,
  updateActivity
);
router.get( "/", getActivities )
module.exports = router;
