import React from "react";
import { useHistory } from "react-router-dom";

import { Formik } from "formik";

import ShowLoginForm from "./ShowLoginForm";
import handleSubmit from "../../services/login/handleSubmit";

const LoginFormik = ({ validation }) => {
  let history = useHistory();
  const onSubmit = (values) => {

    handleSubmit(values, history);

  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={validation}
      onSubmit={onSubmit}
    >
      {ShowLoginForm}
    </Formik>
  );
};

export default LoginFormik;
