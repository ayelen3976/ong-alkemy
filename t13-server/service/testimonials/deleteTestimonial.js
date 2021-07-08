const { sequelize, Sequelize } = require("../../models");
const testimonials = require("../../models/testimonials");
const models = {
  Testimonials: testimonials(sequelize, Sequelize.DataTypes),
};

const deleteTestimonial = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ ok: false, message: "id not provided" });
  }

  try {
    const row = await models.Testimonials.destroy({ where: { id } });
    if (row) {
      res.json({ ok: true, message: "Testimonial deleted" });
    } else {
      res.json({ ok: false, message: "Testimonial not found" });
    }
  } catch (error) {
    res.json({ ok: false, message: error });
  }
};

module.exports = deleteTestimonial;
