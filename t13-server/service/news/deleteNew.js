const { sequelize, Sequelize } = require("../../models");
const entry = require("../../models/entry");

const models = {
  Entry: entry(sequelize, Sequelize.DataTypes),
};

const deleteNew = async (req, res) => {
  const newId = req.params.id;
  try {
    let deletenew = await models.Entry.destroy({ where: { id: newId } });
    if (!deletenew) {
      return res
        .status(400)
        .json({ message: "no se encuentra la noticia para eliminar" });
    }
    res.status(201).json({
      message: "se ha borrado con exito su new",
    });
  } catch (error) {
    res.status(
      res.status(400).json({
        message: "Estas ingresando valores invalidos en news",
        error: error,
      })
    );
  }
};

module.exports = deleteNew;
