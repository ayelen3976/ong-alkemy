const { sequelize, Sequelize } = require("../../models");
const categories = require("../../models/categories");

const models = {
  Categories: categories(sequelize, Sequelize.DataTypes),
};

const getCategories = async (req, res) => {
  try {
    const categories = await models.Categories.findAll();

    if (!categories) {
      return res.status(400).json({ ok: false });
    }
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};

module.exports = getCategories;
