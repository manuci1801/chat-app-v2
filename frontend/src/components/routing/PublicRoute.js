import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(({ user }) => user.isAuthenticated);

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PublicRoute;
