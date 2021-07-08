import React, { useState } from 'react';
import ActivitiesForm from '../activitiesForm/ActivitiesForm';
import ButtonDelete from '../buttons/ButtonDelete';
import deleteAlert from './deleteAlert';

const NewsTableRow = ({
    news,
    toEdit,
    history
}) => {

    const [hover, setHover] = useState(false)
    const [editNews, setEditActivity] = useState(false)

    const handleActions = (id, action) => {
        if (action === "delete") {
            deleteAlert(
                "la novedad", 
                "news",
                id
            )
        }
    }

    const viewActions = () => setHover(true)
    const notViewActions = () => setHover(false)

    const display = hover ? "block" : "none"

    return (
        <div>
                <tr
                    className="table-activity__table-row"
                    onMouseOver={viewActions}
                    onMouseOut={notViewActions}
                >
                    <td className="table-activity__table-data">
                        {news.title}<br />
                        {news.image}<br />
                        {news.createdAt}
                        <div style={{ display: `${display}` }} >
                            <ButtonDelete
                                onClick={() => handleActions(news.id, "delete")}
                                className="icon"
                            />
                        </div>
                    </td>
                </tr>
           </div>
    )
};

export default NewsTableRow;