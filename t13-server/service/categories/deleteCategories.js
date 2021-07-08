const { sequelize, Sequelize } = require("../../models");
const categories = require("../../models/categories");

const models = {
    Categories: categories(sequelize, Sequelize.DataTypes),
  };

  const deleteCategories = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ ok: false, message: "id not provided" });
    }
  
    try {
      const deleteCategory = await models.Categories.destroy({ where: { id } });
      if (deleteCategory) {
        res.json({ ok: true, message: "Category deleted" });
      } else {
        res.json({ ok: false, message: "Category not found" });
      }
    } catch (error) {
      res.json({ ok: false, message: error });
    }
  };


  





  module.exports = deleteCategories;