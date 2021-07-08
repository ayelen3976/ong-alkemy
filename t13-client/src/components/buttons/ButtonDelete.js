import React from "react";

const ButtonDelete = ({ className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <i className='fas fa-trash'></i>
    </button>
  );
};

export default ButtonDelete;
