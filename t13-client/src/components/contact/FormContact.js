import React from 'react';
import FormContactInput from './FormContactInput';
import './style.css'

const FormContact = props => {

    return (
        <form className="form-contact">
            <FormContactInput
                required={props.required.name}
                capture={props.capture}
                type={"text"}
                name={"name"}
                placeholder={"Nombre"}
                className={"form-contact-input"}
            />
            <FormContactInput
                required={props.required.email}
                capture={props.capture}
                type={"email"}
                name={"email"}
                placeholder={"Correo"}
                className={"form-contact-input"}
            />
            <FormContactInput
                required={props.required.phone}
                capture={props.capture}
                type={"number"}
                name={"phone"}
                placeholder={"Teléfono"}
                className={"form-contact-input"}
            />
            <textarea
                placeholder="Mensaje"
                className="form-textarea"
                onChange={props.capture}
                name="message"
                autoCapitalize="sentences"
                autoComplete="off"
                wrap="hard"
            />
            <FormContactInput 
                type={"submit"}
                send={props.send}
                className={"form-submit"}
            />
        </form>
    );
}

export default FormContact;