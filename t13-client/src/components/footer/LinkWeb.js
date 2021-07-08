import React from "react";
import { NavLink } from "react-router-dom";

export const LinkWeb = ({ item, index, location }) => {
  return (
    <>
      <li key={index} className={`${location}__items`}>
        <NavLink
          exact
          to={item.url}
          className={`${location}__item ${item.cName}`}
          activeClassName={`${location}__active`}
        >
          {item.nombre}
        </NavLink>
      </li>
    </>
  );
};
