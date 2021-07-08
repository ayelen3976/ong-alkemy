import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  Role,
}) => (
  <Route
    component={() =>
      isAuthenticated ? <Component Role={Role} /> : <Redirect to="/" />
    }
  />
);

export default PrivateRoute;
