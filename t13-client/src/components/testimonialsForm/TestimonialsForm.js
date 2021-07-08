import React from "react";
import HomeFormInput from "../homeForm/HomeFormInput";

function TestimonialsForm({ testimonialsData, setTestimonialsData, editView }) {
  const handleChange = ({ target }) => {
    setTestimonialsData({
      ...testimonialsData,
      [target.name]: target.value,
    });
  };

  return (
    <form className="testimonials__form">
      {editView ? <h4>Editar testimonio</h4> : <h4>Agregar testimonio</h4>}
      <HomeFormInput
        className={"testimonials__input"}
        type={"text"}
        handleChange={handleChange}
        placeholder={"Ingrese su nombre"}
        value={testimonialsData.name}
        name={"name"}
      />
      <HomeFormInput
        className={"testimonials__input"}
        type={"text"}
        handleChange={handleChange}
        placeholder={"Imágen URL"}
        value={testimonialsData.image}
        name={"image"}
      />
    </form>
  );
}

export default TestimonialsForm;
