import React, { useState } from "react";
import { Field } from "formik";

const notFocused = "form-group__label";
const focused = "form-group__label focused";

const FormGroup = ({ text, name, type }) => {
  const [focusedClass, setFocusedClass] = useState(notFocused);
  const onInput = (e) => {
    if (e.target.value === "") {
      setFocusedClass(notFocused);
    } else {
      setFocusedClass(focused);
    }
  };

  return (
    <div className='form-group'>
      <Field
        className='form-group__field'
        id={name}
        type={type}
        name={name}
        onInput={onInput}
      />
      <label className={focusedClass} htmlFor={name}>
        {text}
      </label>
    </div>
  );
};

export default FormGroup;
