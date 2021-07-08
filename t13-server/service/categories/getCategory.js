const { sequelize, Sequelize } = require("../../models");
const categories = require("../../models/categories");

const models = {
  Categories: categories(sequelize, Sequelize.DataTypes),
};

const getCategory = async (req, res) => {
  try {
    const category = await models.Categories.findByPk(req.params.id);
    res.status(200).json({
      ok: true,
      category,
    });
  } catch (error) {
    res.status(res.status(500).json({ ok: false, message: error }));
  }
};

module.exports = getCategory;
