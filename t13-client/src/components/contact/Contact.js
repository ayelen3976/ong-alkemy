import React, { useState } from "react";
import FormContact from "./FormContact";
import ContactData from "./ContactData";
import "./style.css";
import SendMessage from "../../services/contact/SendMessage";

const Contact = (props) => {
  document.title = "Somos más | Contacto";
  window.scrollTo(0, 0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [, setDefault] = useState("");
  const [required] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const capture = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    switch (property) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        setDefault("default");
    }
  };

  const send = (e) => {
    e.preventDefault();
    SendMessage(name, email, phone, message, required, props);
  };

  return (
    <div className="div-main-contact">
      <div className="div-secondary-contact">
        <ContactData />
        <div className="div-secondary-form-contact">
          <FormContact required={required} capture={capture} send={send} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
