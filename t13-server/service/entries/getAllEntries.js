const { sequelize, Sequelize } = require("../../models");
const entry = require("../../models/entry");
const models = {
  Entry: entry(sequelize, Sequelize.DataTypes),
};

const getAllEntries = async (req, res) => {
  models.Entry.findAll({
    attributes: ["title", "image", "createdAt"],
    where: { type: "news" },
  })
    .then((news) => {
      res.json(news);
    })
    .catch((err) => res.status(500).json(err));
};

module.exports = getAllEntries;
