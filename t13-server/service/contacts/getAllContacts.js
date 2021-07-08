const { sequelize, Sequelize } = require("../../models");
const contacts = require("../../models/contacts");
const models = {
  Contacts: contacts(sequelize, Sequelize.DataTypes),
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await models.Contacts.findAll();

    if (!contacts) {
      return res.status(400).json({ ok: false });
    }
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ ok: false, message: error });
  }
};

module.exports = getAllContacts;
