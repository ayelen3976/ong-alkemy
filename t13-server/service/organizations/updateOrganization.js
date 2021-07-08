const { sequelize, Sequelize } = require("../../models");
const organization = require("../../models/organization");
const models = {
  Organization: organization(sequelize, Sequelize.DataTypes),
};

const updateOrganization = async (req, res) => {
  const id = req.params.id;
  const { name, image } = req.body;
  const regex = /(http(s?):[/][/])([/|.|\w|\s|-])*\.(?:jpg|png)/;

  try {
    const organization = await models.Organization.findOne({ where: { id } });

    if (!organization) {
      return res.status(404).json({
        ok: false,
        message: "No existe esta organización",
      });
    }
    if (!image) {
      return res.status(404).json({
        ok: false,
        message: "imagen requerida",
      });
    }

    if (!regex.test(image)) {
      return res.status(404).json({
        ok: false,
        message: "Debe ser una url jpg o png",
      });
    }
    await models.Organization.update(
      { name, image },
      {
        where: {
          id,
        },
      }
    );

    return res.status(201).json({
      ok: true,
      organization,
    });
  } catch (err) {
    console.log(err);
    res.json({
      ok: false,
      err,
    });
  }
};
module.exports = { updateOrganization };
