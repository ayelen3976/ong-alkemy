const { sequelize, Sequelize } = require("../../models");
const organization = require("../../models/organization");
const models = { Organization: organization(sequelize, Sequelize.DataTypes) };

module.exports = {
  getById: function (req, res) {
    models.Organization.findByPk(req.params.id, {
      attributes: [
        "name",
        "image",
        "phone",
        "address",
        "welcomeText",
        "web",
        "facebook",
        "linkedin",
        "instagram",
      ],
    })
      .then((organizations) => {
        if (organizations == null) {
          res.status(404);
        }
        res.json(organizations);
      })
      .catch((err) => res.status(500).json(err));
  },
};
