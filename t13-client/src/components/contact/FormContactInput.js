import React from 'react';
import './style.css'


const FormContactInput = props => {

    return (
        <>
            <span
                className={props.required === "" ? "" : "form-err"}
            >
                {props.required}
            </span>
            <input
                className={props.className}
                autoComplete="off"
                onChange={props.capture}
                onClick={props.send}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
            />
        </>
    );
}

export default FormContactInput;