import React from "react";

function Title({ location }) {
  return (
    <div className={`welcome__${location}`}>
      <h2 className={`${location}__title`}>#SomosMás</h2>
      <p className={`${location}__text`}>
        Nuestro objetivo es mejorar la calidad de vida de niños y familias en
        situación de vulnerabilidad en el barrio La Cava, otorgando un cambio de
        rumbo en cada individuo a través de la educación, salud, trabajo,
        deporte, responsabilidad y compromiso.
      </p>
    </div>
  );
}

export default Title;
