const { sequelize, Sequelize } = require("../../models");
const entry = require("../../models/entry");
const { get } = require("../../routes/contacts");
const models = {
  Entry: entry(sequelize, Sequelize.DataTypes),
};

const updateEntry = async (req, res) => {
  models.Entry.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((entries) => {
      if (entries == 0) {
        res.status(404);
      }
      res.json(entries);
    })
    .catch((err) => res.status(500).json(err));
};

module.exports = updateEntry;
