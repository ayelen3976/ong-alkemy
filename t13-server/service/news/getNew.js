const { sequelize, Sequelize } = require("../../models");
const entry = require("../../models/entry");

const models = {
  Entry: entry(sequelize, Sequelize.DataTypes),
};

const getNew = async (req, res) => {
  try {
    let byid = await models.Entry.findByPk(req.params.id);
    res.status(201).json({
      byid,
    });
  } catch (error) {
    res.status(
      res.status(400).json({ message: "bad request get by id", error: error })
    );
  }
};

module.exports = getNew;
