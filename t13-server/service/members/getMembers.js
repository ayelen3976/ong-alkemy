const { sequelize, Sequelize } = require("../../models");
const members = require("../../models/members");

const models = { Members: members(sequelize, Sequelize.DataTypes) };

const getMembers = async (req, res) => {
  try {
    let membersList = await models.Members.findAll();
    res.status(200).json({
      membersList,
    });
  } catch (error) {
    res.status(
      res.status(400).json({ message: "bad request get members", error: error })
    );
  }
};

module.exports = getMembers;
