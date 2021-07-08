import React from "react";
import { useHistory } from "react-router-dom";

import FormFormik from "../formComponents/FormFormik";
import ShowRegisterForm from "./ShowRegisterForm";

import { validation, initialValues } from "./RegisterConfig";
// import handleSubmit from "../../services/register/handleSubmit";
import { register } from "./../../actions/register";
import { useDispatch } from "react-redux";
import "../formComponents/formStyles.css";

const Register = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    console.log(values, "esteebb");
    const { email, password, lastName, firstName } = values;
    // handleSubmit(values, history);
    const loginInfo = { email, password, lastName, firstName };
    dispatch(register(loginInfo));
  };

  return (
    <div className='formik'>
      <FormFormik
        initialValues={initialValues}
        validation={validation}
        onSubmit={onSubmit}
        ShowForm={ShowRegisterForm}
      />
    </div>
  );
};

export default Register;
