import React from "react";

import BackofficeNavbar from "./BackofficeNavbar";
import BackofficeView from "./BackofficeView";

import "./backoffice.css";

const BackofficeContainer = ({ Role }) => {
  return (
    <div className="backoffice">
      <BackofficeNavbar firstName="testName" role="userRole" />
      <BackofficeView Role={Role} />
    </div>
  );
};

export default BackofficeContainer;
