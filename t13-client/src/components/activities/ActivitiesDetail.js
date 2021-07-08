import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getActivitiesByID from "../../services/activities/getActivitiesByID";
import "./activitiesDetails.css";

function ActivitiesDetail() {
  const [activitieDetails, setActivitiesDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getDataActivities = async () => {
      const getActivitiesDetails = await getActivitiesByID(id);
      setActivitiesDetails(getActivitiesDetails.byid);
    };

    getDataActivities();
  }, []);

  return (
    <div className='activities__detail'>
      <h2 className='activities__name'>{activitieDetails?.name}</h2>
      <img
        src={activitieDetails?.image}
        alt={activitieDetails?.name}
        className='activities__image'
      />

      <div className='activities__content'>
        <p>{activitieDetails?.content}</p>
      </div>
    </div>
  );
}

export default ActivitiesDetail;
