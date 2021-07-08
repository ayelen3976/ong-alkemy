const { sequelize, Sequelize } = require("../../models");
const user = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");

const models = {
  User: user(sequelize, Sequelize.DataTypes),
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await models.User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe",
      });
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Usuario o contraseña incorrectos",
      });
    }

    let token = jwt.sign({ user }, authConfig.secret, {
      expiresIn: authConfig.expires,
    });

    return res.status(201).json({
      ok: true,
      user,
      token,
    });
  } catch (err) {
    console.log(err);
    res.json({
      ok: false,
      err,
    });
  }
};
// ---------log out----------------

/* const logOut = async (req,  res) =>{
  try {
    if(req.headers.authorization){
      req.headers.authorization = ""
      req.login.estado = false
      req.login.user = ""
      req.login.token = ""
      req.user = ""

  }
  return res.status(200).json('Se ha desconectado', {logOut});

}catch (error) {
  res.status(400).json('no hay usuario logeado');
  }
}

 */

const getUsers = async (req, res) => {
  try {
    let getusers = await models.User.findAll({ where: { roleId: "1" } });
    res.status(201).json({
      getusers,
    });
  } catch (error) {
    res.status(
      res
        .status(400)
        .json({ message: "bad request get list users", error: error })
    );
  }
};

module.exports = {
  getUsers,
  login,
};
