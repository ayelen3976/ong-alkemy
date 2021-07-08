const { sequelize, Sequelize } = require("../../models");
const contacts = require("../../models/contacts");
const models = {
  Contacts: contacts(sequelize, Sequelize.DataTypes),
};
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const postContact = async (req, res) => {
  const { name, phone, email, message } = req.body;
  if (name && email && phone) {
    try {
      await models.Contacts.create({
        name,
        email,
        phone,
        message,
      });
      const msg = {
        to: `<${email}>`,
        from: `ssomosmasong@gmail.com`,
        subject: "Your data of Contact",
        text: `Welcome Contact`,
        html: ` 
      <body>
      <h3 style="text-align: center">¡Gracias por tu mensaje!</h3> 
        <h4>Apreciamos que formes parte de nuestra lista de contactos</h4> 
        <h4>Responderemos a la brevedad a tu consulta:</h4>
        <blockquote
          style="border-left: 0.2px solid #db5752; border-right: 0.2px solid #db5752; padding: 0 20px"
        >
          ${message}
        </blockquote>
        <h5>Espero que tengamos buena comunicación y nos llevemos bien. Saludos!! :)</h5>
        <div style="border: 0.2px solid black; padding: 10px 20px">
          <span style="text-decoration: underline">Tus datos de contacto</span>
          <ul>
            <li>Nombre: ${name}</li>
            <li>Correo electrónico: ${email}</li>
            <li>Teléfono: ${phone}</li>
          </ul>
        </div>
       </body>`,
      };
      sgMail.send(msg);
      res.status(201).json({ ok: true, message: "Contact created." });
    } catch (error) {
      res.status(500).json({ ok: false, message: error });
    }
  } else {
    res
      .status(400)
      .json({ ok: false, message: "Algo ha salido mal, intente nuevamente más tarde" });
  }
};

module.exports = postContact;
