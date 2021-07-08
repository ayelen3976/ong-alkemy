import React, { useState } from "react";
import alerts from "../../services/alerts/alerts";
import { fetchWithToken } from "../../services/fetch/fetch";
import "./editionOrganization.css";

const initOperation = {
  name: "",
  image: "",
};

export const EditionOrganization = () => {
  const [formValues, setFormValues] = useState(initOperation);
  const { name, image } = formValues;

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      alerts.errorLogin("Nombre debe ser mayor a 2 digitos");
    }
    if (!image) {
      alerts.errorLogin("imagen es requerida");
    }
    fetchWithToken("organizations/2", { name, image }, "PUT")
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          alerts.confirm("organizacion", "se editó correctamente");
        } else {
          alerts.errorLogin(data.message);
        }
      });
  };
  return (
    <form
      className="organization__edition-form container"
      onSubmit={handleSubmitForm}
    >
      <h1 className="form__title">Editar Organización</h1>
      <div className="form-group">
        <p>Name</p>
        <input
          className="form-group__field"
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <p>Logo</p>
        <input
          pattern="(http(s?)://)([/|.|\w|\s|-])*\.(?:jpg|png)"
          className="form-group__field"
          type="text"
          name="image"
          value={image}
          onChange={handleInputChange}
        />
      </div>
      <button className="organization__edit-btn">Editar</button>
    </form>
  );
};
