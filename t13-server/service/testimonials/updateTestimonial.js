const { sequelize, Sequelize } = require("../../models");
const testimonials = require("../../models/testimonials");
const models = {
  Testimonials: testimonials(sequelize, Sequelize.DataTypes),
};

const updateTestimonial = async (req, res) => {
  const id = req.params.id;
  const { name, image, content } = req.body;
  const regex = /(http(s?):[/][/])([/|.|\w|\s|-])*\.(?:jpg|png)/;

  try {
    const testimonial = await models.Testimonials.findOne({ where: { id } });

    if (!testimonial) {
      return res.status(404).json({
        ok: false,
        message: "No existe este testimonial",
      });
    }

    if (image && !regex.test(image)) {
      return res.status(404).json({
        ok: false,
        message: "Debe ser una url jpg o png",
      });
    }
    await models.Testimonials.update(
      { name, image, content },
      {
        where: {
          id,
        },
      }
    );
    testimonial.name = name;
    testimonial.content = content;
    testimonial.image = image;

    return res.status(200).json({
      ok: true,
      testimonial,
    });
  } catch (err) {
    console.log(err);
    res.json({
      ok: false,
      err,
    });
  }
};
module.exports = { updateTestimonial };
