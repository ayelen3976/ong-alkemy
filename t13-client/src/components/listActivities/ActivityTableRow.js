import React, { useState } from 'react';
import alerts from '../../services/alerts/alerts'
import ActivitiesForm from '../activitiesForm/ActivitiesForm';
import ButtonDelete from '../buttons/ButtonDelete';
import ButtonEdit from '../buttons/ButtonEdit';

const ActivityTableRow = ({
    activity,
    toEdit,
    history
}) => {

    const [hover, setHover] = useState(false)
    const [editActivity, setEditActivity] = useState(false)

    const handleActions = async (id, action, history) => {
        if (action === "delete") {
            alerts.delete(
                "la actividad", 
                "activities",
                id, 
                history
            )
        } else {
            setEditActivity(true)
            toEdit(true)
        }
    }

    const viewActions = () => setHover(true)
    const notViewActions = () => setHover(false)

    const display = hover ? "block" : "none"

    return (
        !editActivity
            ? (
                <tr
                    className="table-activity__table-row"
                    onMouseOver={viewActions}
                    onMouseOut={notViewActions}
                >
                    <td className="table-activity__table-data">
                        {activity.name}
                        <div style={{ display: `${display}` }} >
                            <ButtonDelete
                                onClick={() => handleActions(activity.id, "delete", history)}
                                className="icon"
                            />
                            <ButtonEdit
                                onClick={() => handleActions(activity, "edit")}
                                className="icon"
                            />
                        </div>
                    </td>
                </tr>
            )
            :
            <ActivitiesForm
                activity={activity}
                notViewEdit={setEditActivity}
                history={history}
                toEdit={toEdit}
            />
    )
};

export default ActivityTableRow;