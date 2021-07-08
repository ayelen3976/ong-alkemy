const express = require("express");
const deleteTestimonial = require("../service/testimonials/deleteTestimonial");
const { getTestimonials } = require("../service/testimonials/getTestimonial");
const postTestimonial = require("../service/testimonials/postTestimonial");
const {
  updateTestimonial,
} = require("../service/testimonials/updateTestimonial");
const router = express.Router();

router.get("/", getTestimonials);
router.post("/", postTestimonial);
router.put("/:id", updateTestimonial);
router.delete("/:id", deleteTestimonial);

module.exports = router;
