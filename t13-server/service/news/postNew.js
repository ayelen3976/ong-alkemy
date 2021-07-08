const { sequelize, Sequelize } = require("../../models");
const entry = require("../../models/entry");

const models = {
  Entry: entry(sequelize, Sequelize.DataTypes),
};

const postNew = async (req, res) => {
  const { title, content, image, type } = req.body;

  try {
    let novelty = await models.Entry.create({ title, content, image, type });
    if (!novelty) {
      return res.status(400).json({ message: "hay algo mal" });
    }
    res.status(201).json({
      novelty,
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

module.exports = postNew;
