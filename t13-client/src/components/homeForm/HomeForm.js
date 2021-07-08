import React from "react";
import HomeFormInput from "./HomeFormInput";

function HomeForm({
  welcomeText,
  title1,
  title2,
  title3,
  image1,
  image2,
  image3,
  handleChange,
}) {
  return (
    <div className="home__edit">
      <form className="home__form">
        <h3>Nuevo texto de bienvenida</h3>
        <br />
        <textarea
          name="welcomeText"
          value={welcomeText}
          cols="47"
          rows="4"
          onChange={handleChange}
          className="home__textarea"
          placeholder="Ingrese su texto aquí"
        />
        <h3>Agregar nuevo Slide</h3>
        <h4>Primer Slide</h4>
        <HomeFormInput
          className={"home__input"}
          type={"text"}
          handleChange={handleChange}
          placeholder={"Titulo"}
          value={title1}
          name={"title1"}
        />
        <HomeFormInput
          className={"home__input"}
          type={"text"}
          handleChange={handleChange}
          placeholder={"Imágen url"}
          value={image1}
          name={"image1"}
        />
        <h4>Segundo Slide</h4>
        <HomeFormInput
          className={"home__input"}
          type={"text"}
          handleChange={handleChange}
          placeholder={"Titulo"}
          value={title2}
          name={"title2"}
        />
        <HomeFormInput
          className={"home__input"}
          type={"text"}
          handleChange={handleChange}
          placeholder={"Imágen url"}
          value={image2}
          name={"image2"}
        />
        <h4>Tercer Slide</h4>
        <HomeFormInput
          className={"home__input"}
          type={"text"}
          handleChange={handleChange}
          placeholder={"Titulo"}
          value={title3}
          name={"title3"}
        />
        <HomeFormInput
          className={"home__input"}
          type={"text"}
          handleChange={handleChange}
          placeholder={"Imágen url"}
          value={image3}
          name={"image3"}
        />
        <HomeFormInput
          className={"home__btn"}
          type={"submit"}
          value="Agregar"
        />
      </form>
    </div>
  );
}

export default HomeForm;
