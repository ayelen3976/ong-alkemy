import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormActivityContent from './FormActivityContent';
import FormActivityName from './FormActivityName';
import actionCreateOrUpdate from '../../services/activities/actionCreateOrUpdate'
import './styles.css';

const ActivitiesForm = props => {
    window.scrollTo(0, 0)

    const[activity, setActivity] = useState(props.activity ? props.activity : {})
    const[name, setName] = useState('')
    const[content, setContent] = useState('')
    const[newActivity, setNewActivity] = useState({ name: '', content: '' })

    useEffect(() => {
        setNewActivity({name, content});
    }, [name, content]);

    const executeAction = (e) => {
        e.preventDefault();
        actionCreateOrUpdate(
            activity, 
            newActivity, 
            props.history, 
            setNewActivity,
            setActivity
        )
    };

    const returnActivityList = e => {
        e.preventDefault()
        props.notViewEdit(false)
        props.toEdit(false)
    }

    return (
        <>
        <div className="form-activities">
            <Form className="form-activities__form">
                <FormActivityName 
                    getName={setName}
                    activity={activity}
                />
                <FormActivityContent 
                    getContent={setContent}
                    activity={activity}
                />
                <Button 
                    className="form-activities__submit"
                    variant="primary" 
                    type="submit"
                    onClick={executeAction}
                >
                    { Object.keys(activity).length === 0
                        ? 'Crear' : 'Editar' }
                </Button>
                { Object.keys(activity).length > 0
                    &&  <Button
                            className="form-activities__submit"
                            variant="primary" 
                            type="submit"
                            onClick={returnActivityList}
                        >
                            Cancelar
                        </Button>
                }
            </Form>
        </div>
      </>
    );
};

export default ActivitiesForm;