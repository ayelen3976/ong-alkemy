import React from "react";
import { Formik } from "formik";

const FormFormik = ({ validation, initialValues, onSubmit, ShowForm }) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validation}
      onSubmit={onSubmit}
    >
      {ShowForm}
    </Formik>
  );
};

export default FormFormik;
