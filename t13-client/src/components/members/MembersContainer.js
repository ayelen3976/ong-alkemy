import React, { useState, useEffect } from "react";
import Card from "../home/Card";
import Wrapper from "../wrapper/Wrapper";
import Loader from "../loader/LoaderSpinner";
import "../home/home.css";

import getMembers from "../../services/members/getMembers";

const MembersContainer = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getDataMembers = async () => {
      const dataMembers = await getMembers();
      setLoading(false);
      setMembers(dataMembers);
    };
    getDataMembers();
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <Loader />
      ) : (
        <div className='card__section'>
          {members.map(({ name, image }) => (
            <Card title={name} imgSrc={image} />
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default MembersContainer;
