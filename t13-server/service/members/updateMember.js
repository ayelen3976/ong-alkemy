const { sequelize, Sequelize } = require("../../models");
const members = require("../../models/members");
const models = {
  Members: members(sequelize, Sequelize.DataTypes),
};

const updateMember = async (req, res) => {
  const id = req.params.id;
  const { name, image } = req.body;
  const regex = /(http(s?):[/][/])([/|.|\w|\s|-])*\.(?:jpg|png)/;
  try {
    const member = await models.Members.findOne({ where: { id } });

    if (!member) {
      return res.status(404).json({
        ok: false,
        message: "No existe este miembro",
      });
    }

    if (!regex.test(image)) {
      return res.status(404).json({
        ok: false,
        message: "Debe ser una url jpg o png",
      });
    }
    await models.Members.update(
      { name, image },
      {
        where: {
          id,
        },
      }
    );
    member.name = name;
    member.image = image;

    return res.status(200).json({
      ok: true,
      member,
    });
  } catch (err) {
    console.log(err);
    res.json({
      ok: false,
      err,
    });
  }
};

module.exports = { updateMember };
