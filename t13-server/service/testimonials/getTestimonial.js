const { sequelize, Sequelize } = require("../../models");
const testimonials = require("../../models/testimonials");
const models = {
  Testimonials: testimonials(sequelize, Sequelize.DataTypes),
};

const getTestimonials = async (req, res) => {
  try {
    let testimonials = await models.Testimonials.findAll();
    res.status(200).json({
      testimonials,
    });
  } catch (error) {
    res.status(
      res
        .status(400)
        .json({ message: "bad request get list users", error: error })
    );
  }
};
module.exports = { getTestimonials };
