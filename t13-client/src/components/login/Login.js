import React from "react";
import FormFormik from "../formComponents/FormFormik";
import ShowLoginForm from "./ShowLoginForm";
import { validation, initialValues } from "./LoginConfig";
import "../formComponents/formStyles.css";
import { login } from "./../../actions/login";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    const { email, password } = values;

    const loginInfo = { email, password };
    dispatch(login(loginInfo));
  };

  return (
    <div className='formik'>
      <FormFormik
        initialValues={initialValues}
        validation={validation}
        onSubmit={onSubmit}
        ShowForm={ShowLoginForm}
      />
    </div>
  );
};

export default Login;
