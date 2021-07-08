import React, { useState } from "react";
import "./navbar.css";
import { Logo } from "../logo/Logo";
import { LinkWebs } from "../footer/LinkWebs";

function Navbar() {
  const [click, setClick] = useState(false);
  const navBar = "navBar";
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="nav__items">
      <div className="nav-logo">
        <Logo location={navBar} />
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <LinkWebs location={navBar} />
      </ul>
    </nav>
  );
}

export default Navbar;
