const { sequelize, Sequelize } = require("../../models");
const user = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");
const models = {
  User: user(sequelize, Sequelize.DataTypes),
};
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// ---------post register----------------
const register = async (req, res) => {
  const roleId = req.body.roleId ? req.body.roleId : "2";
  const { firstName, lastName, email, image, organizationId } = req.body;

  let password = bcrypt.hashSync(req.body.password, 5);

  try {
    let [user, created] = await models.User.findOrCreate({
      where: { email },
      defaults: {
        firstName,
        lastName,
        email,
        image,
        password,
        roleId,
        organizationId,
      },
    });

    if (!created) {
      return res.status(400).json({ msg: "el usuario ya existe" });
    }

    const msg = {
      to: `<${user.email}>`,
      from: `ssomosmasong@gmail.com`,
      subject: "Your data of register",
      text: `welcome user`,
      html: ` 
    <body>
    <h1>Bienvenid@ a Somos mas ! </h1> 
  
      <h4>Estamos agradecidos de que estes con nosotros en esta ong sin fines de lucro, 
      estos son tus datos...</h4>
      <ul>
      <li> nombre: ${user.firstName}</li>
      <li>apellido: ${user.lastName}</li>
      <li>email: ${user.email}</p> </li>
      </ul>
     
     </body>`,
    };
    let token = jwt.sign({ user }, authConfig.secret, {
      expiresIn: authConfig.expires,
    });
    sgMail.send(msg);
    res.status(201).json({
      user,
      token,
      ok: true
    });

  } catch (error) {
    res.status(
      res
        .status(400)
        .json({ 
          ok: false,
          msg: "Estas ingresando valores invalidos"})
    );
  }
};

module.exports = {
  register,
};
