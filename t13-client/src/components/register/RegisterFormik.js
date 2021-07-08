import React from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";

import ShowRegisterForm from "./ShowRegisterForm";
import handleSubmit from "../../services/register/handleSubmit";

const RegisterFormik = ({ validation }) => {
  let history = useHistory();
  const onSubmit = (values) => {
    handleSubmit(values, history);
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validate={validation}
      onSubmit={onSubmit}
    >
      {ShowRegisterForm}
    </Formik>
  );
};

export default RegisterFormik;
