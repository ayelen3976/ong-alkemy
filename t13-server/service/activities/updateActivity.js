const { sequelize, Sequelize } = require("../../models");
const activity = require("../../models/activity");
const models = {
  Activity: activity(sequelize, Sequelize.DataTypes),
};

const updateActivity = async (req, res) => {
  const id = req.params.id;
  const { name, content, image } = req.body;
  const regex = /(http(s?):[/][/])([/|.|\w|\s|-])*\.(?:jpg|png)/;

  try {
    const activity = await models.Activity.findOne({ where: { id } });

    if (!activity) {
      return res.status(404).json({
        ok: false,
        message: "No existe esta actividad",
      });
    }

    if (image && !regex.test(image)) {
      return res.status(404).json({
        ok: false,
        message: "Debe ser una url jpg o png",
      });
    }
    await models.Activity.update(
      { name, content, image },
      {
        where: {
          id,
        },
      }
    );

    return res.status(201).json({
      ok: true,
      activity,
    });
  } catch (err) {
    console.log(err);
    res.json({
      ok: false,
      err,
    });
  }
};
module.exports = { updateActivity };
