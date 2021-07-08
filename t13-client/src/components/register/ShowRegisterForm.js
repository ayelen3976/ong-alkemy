import React from "react";
import { Form, ErrorMessage } from "formik";

import FormGroup from "../formComponents/FormGroup";
import ButtonSubmit from "../formComponents/ButtonSubmit";

const ShowRegisterForm = () => (
  <Form className='form'>
    <h1 className='form__title'>Registrarse</h1>
    <FormGroup text='Nombre' name='firstName' type='text' />
    <ErrorMessage component='span' className='form__error' name='firstName' />
    <FormGroup text='Apellido' name='lastName' type='text' />
    <ErrorMessage component='span' className='form__error' name='lastName' />
    <FormGroup text='Email' name='email' type='email' />
    <ErrorMessage component='span' className='form__error' name='email' />
    <FormGroup text='Contraseña' name='password' type='password' />
    <ErrorMessage component='span' className='form__error' name='password' />
    <ButtonSubmit text='Registrarse' />
  </Form>
);

export default ShowRegisterForm;
