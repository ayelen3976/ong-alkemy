import React, { useState, useEffect } from "react";
import Card from "../home/Card";
import { NavLink } from "react-router-dom";
import getActivities from "../../services/activities/getActivities";

import "../home/home.css";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getDataActivitie = async () => {
      const dataActivitie = await getActivities();
      setActivities(dataActivitie);
    };
    getDataActivitie();
  }, []);

  return (
    <div className='card__section'>
      {activities?.map((activitie) => (
        <NavLink to={`/actividades/${activitie.id}`} key={activitie.id}>
          <Card
            imgSrc={activitie.image}
            title={activitie.name}
            description={activitie.content}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default Activities;
