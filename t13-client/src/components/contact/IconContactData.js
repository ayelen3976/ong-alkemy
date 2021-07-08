import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./style.css";

const IconContactData = () => {
  return (
    <div className='div-arrow-pathToHome'>
      <NavLink className='arrow-link' to='/'>
        <FontAwesomeIcon title="vovler al inicio" className='arrow-icon' icon={faArrowLeft} />
      </NavLink>
    </div>
  );
};

export default IconContactData;
