const { sequelize, Sequelize } = require("../../models");
const categories = require("../../models/categories");
const models = {
  Categories: categories(sequelize, Sequelize.DataTypes),
};

const updateCategories = async (req, res) => {
  const id = req.params.id;
  const { name, description } = req.body;

  try {
    const categories = await models.Categories.findOne({ where: { id } });

    if (!categories) {
      return res.status(404).json({
        ok: false,
        message: "No existe esta categoria",
      });
    }
    await models.Categories.update(
      { name, description },
      {
        where: {
          id,
        },
      }
    );
    categories.name = name;
    categories.description = description;
    return res.status(200).json({
      ok: true,
      categories,
    });
  } catch (err) {
    console.log(err);
    res.json({
      ok: false,
      err,
    });
  }
};
module.exports = { updateCategories };
