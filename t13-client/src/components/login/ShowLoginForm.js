import React from "react";

import { Form, ErrorMessage } from "formik";
import FormGroup from "../formComponents/FormGroup";
import ButtonSubmit from "../formComponents/ButtonSubmit";

const ShowLoginForm = () => (
  <Form className='form'>
    <h1 className='form__title'>Iniciar Sesión</h1>
    <FormGroup type='email' name='email' text='Email' />
    <ErrorMessage className='form__error' component='span' name='email' />
    <FormGroup type='password' name='password' text='Contraseña' />
    <ErrorMessage className='form__error' component='span' name='password' />
    <ButtonSubmit text='Inicia sesión' />
  </Form>
);

export default ShowLoginForm;
