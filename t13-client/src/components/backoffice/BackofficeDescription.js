import React from "react";

const BackofficeDescription = ({ firstName, role }) => {
  return (
    <div className='navbar__description'>
      <h2 className='description__name'>{firstName}</h2>
      <p className='description__rol'>
        Rol: <strong>{role}</strong>
      </p>
    </div>
  );
};

export default BackofficeDescription;
