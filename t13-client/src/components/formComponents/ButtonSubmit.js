import React from "react";

const ButtonSubmit = ({ text }) => {
  return (
    <button className='form__button' type='submit'>
      {text}
    </button>
  );
};

export default ButtonSubmit;
