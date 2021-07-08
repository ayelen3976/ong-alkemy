const { sequelize, Sequelize } = require("../../models");
const activity = require("../../models/activity");
const models = {
  Activity: activity(sequelize, Sequelize.DataTypes),
};

const getActivities = async (req, res) => {
  try {
    const activities = await models.Activity.findAll();
    
    if (!activities) {
      return res.status(400).json({ ok: false });
    }
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};

module.exports = {getActivities};
