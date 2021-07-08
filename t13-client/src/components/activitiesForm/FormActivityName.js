import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap'

const FormActivityName = props => {

    const[defaultValue, setDefault] = useState("")

    useEffect(() => {
        Object.keys(props.activity).length === 0 ? setDefault("") : setDefault(props.activity.name)
    }, [props.activity])

    const getActivityName = e => {
        const value = e.target.value
        props.getName( value )
    }

    return (
        <Form.Group>
            <Form.Label className="form-activities__label">Nombre</Form.Label>
            <Form.Control 
                autoComplete="off"
                type="text" 
                name="name" 
                placeholder="Ejemplo: Excursión" 
                onChange={getActivityName}
                defaultValue={defaultValue}
            />
        </Form.Group>
    );
}

export default FormActivityName;