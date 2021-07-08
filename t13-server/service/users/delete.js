const { sequelize, Sequelize } = require("../../models");
const user = require("../../models/user");
const bcrypt = require("bcrypt");
const models = {
  User: user(sequelize, Sequelize.DataTypes),
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    let userFind = await models.User.destroy({ where: { id: userId } });
    console.log(userFind);

    if (!userFind) {
      return res.status(404).json({
        ok: false,
        err: {
          message: "El usuario no existe",
        },
      });
    }

    return res.json({
      ok: true,
      message: "Usuario ha sido eliminado",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      ok: false,
      err,
    });
  }
};

module.exports = {
  deleteUser,
};
