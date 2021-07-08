import React from "react";
import HomeFormInput from "../homeForm/HomeFormInput";

const CategoriesForm = ({ categoryData, setCategoryData, editView }) => {
  const handleChange = ({ target }) => {
    setCategoryData({
      ...categoryData,
      [target.name]: target.value,
    });
  };

  return (
    <form className="news__form">
      <h1 className="mb-5">
        {editView ? "Editar categoría" : "Agregar categoría"}
      </h1>
      <HomeFormInput
        className={"news__input"}
        type={"text"}
        handleChange={handleChange}
        placeholder={"Nombre"}
        value={categoryData.name}
        name={"name"}
      />
      <HomeFormInput
        className={"news__input"}
        type={"text"}
        handleChange={handleChange}
        placeholder={"Descripción"}
        value={categoryData.description}
        name={"description"}
      />
    </form>
  );
};

export default CategoriesForm;
