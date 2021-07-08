import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export const Logo = ({ location }) => {
  return (
    <Link to={"/"}>
      <img src={logo} alt={logo} className={`logo__${location}`} />
    </Link>
  );
};
