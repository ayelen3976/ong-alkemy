const { sequelize, Sequelize } = require("../../models");
const members = require("../../models/members");

const models = {
    Members: members(sequelize, Sequelize.DataTypes),
  };

  const deleteMembers = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ ok: false, message: "id not provided" });
    }
  
    try {
      const deleteMember = await models.Members.destroy({ where: { id } });
      if (deleteMember) {
        res.json({ ok: true, message: "Member deleted" });
      } else {
        res.json({ ok: false, message: "Member not found" });
      }
    } catch (error) {
      res.json({ ok: false, message: error });
    }
  };

  





  module.exports = deleteMembers;