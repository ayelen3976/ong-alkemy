import React from "react";
import ButtonEdit from "../../buttons/ButtonEdit";
import ButtonDelete from "../../buttons/ButtonDelete";

export const Testimonial = ({ testimonial }) => {
  return (
    <div key={testimonial.id} className="testimonial__container">
      <h1 className="testimonial__name">{testimonial.name}</h1>
      <div className="testimonial__buttons">
        <ButtonEdit className={"testimonial__btn-edit"} />
        <ButtonDelete className={"testimonial__btn-delete"} />
      </div>
    </div>
  );
};
