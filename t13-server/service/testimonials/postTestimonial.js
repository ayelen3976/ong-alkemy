const { sequelize, Sequelize } = require("../../models");
const testimonials = require("../../models/testimonials");
const models = {
  Testimonials: testimonials(sequelize, Sequelize.DataTypes),
};

const postTestimonial = async (req, res) => {
  const { name, content, image } = req.body;

  if (name === "" || content === "" || !name || !content) {
    return res
      .status(400)
      .json({ ok: false, message: "Name and content are required." });
  }

  try {
    models.Testimonials.create({
      name,
      image,
      content,
    });

    res.status(201).json({ ok: true, message: "Created testimonial" });
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};

module.exports = postTestimonial;
