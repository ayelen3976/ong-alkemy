const { sequelize, Sequelize } = require("../../models");
const activity = require("../../models/activity");
const models = {
  Activity: activity(sequelize, Sequelize.DataTypes),
};

const newActivity = async (req, res) => {
  const { name, content, image } = req.body;
  const regex = /(http(s?):[/][/])([/|.|\w|\s|-])*\.(?:jpg|png)/;
  try {
    if (!regex.test(image)) {
      return res.status(404).json({
        ok: false,
        message: "Debe ser una url jpg o png",
      });
    }
    const createdActivity = await models.Activity.create({
      name,
      content,
      image,
    });

    return res.status(201).json({
      ok: true,
      createdActivity,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error,
    });
  }
};

module.exports = {
  newActivity,
};
