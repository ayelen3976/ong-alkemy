import React from "react";
import HomeFormInput from "../homeForm/HomeFormInput";

function NewsForm({ setNewsData, newsData, editView }) {
  const handleChange = ({ target }) => {
    setNewsData({
      ...newsData,
      [target.name]: target.value,
    });
  };

  return (
    <form className="news__form">
      {editView ? <h4>Editar novedad</h4> : <h4>Agregar novedad</h4>}
      <HomeFormInput
        className={"news__input"}
        type={"text"}
        handleChange={handleChange}
        placeholder={"Titulo"}
        value={newsData.title}
        name={"title"}
      />
      <HomeFormInput
        className={"news__input"}
        type={"text"}
        handleChange={handleChange}
        placeholder={"Imágen URL"}
        value={newsData.image}
        name={"image"}
      />
    </form>
  );
}

export default NewsForm;
