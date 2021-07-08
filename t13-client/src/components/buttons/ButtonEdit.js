import React from "react";

const ButtonEdit = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <i className='fas fa-edit'></i>
    </button>
  );
};

export default ButtonEdit;
