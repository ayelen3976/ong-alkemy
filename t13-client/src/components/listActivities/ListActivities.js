import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import ActivityTableRow from './ActivityTableRow';
import getActivities from '../../services/activities/getActivities';
import { useHistory } from "react-router-dom";
import './styles.css'


const ListActivities = () => {

    const [activities, setActivities] = useState([]);
    const[toEdit, setToEdit] = useState(false)
    const history = useHistory()

    useEffect(() => {
        const getActivitiesData = async () => {
            const activitiesData = await getActivities(history);
            setActivities(activitiesData);
        };
        getActivitiesData()
    }, [history]);

    
    return (
        <Table className="table-list" striped bordered hover size="sm">
            <thead className="table-list__header">
                <tr>
                    <th>
                        Lista de Actividades 
                        {toEdit &&
                            <p style={{color: "red", display: "inline"}}> | Editando</p>
                        }
                    </th>
                </tr>
            </thead>
            <tbody>
                {activities && activities.map(activity => {
                    return <ActivityTableRow 
                                activity={activity} 
                                toEdit={setToEdit} 
                                history={history} 
                            />
                })}
            </tbody>
        </Table>
    );
}

export default ListActivities;