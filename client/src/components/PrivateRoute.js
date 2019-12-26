import React from "react";
import { Route, Redirect } from "react-router-dom";

const isAuthenticated = () => {
  return sessionStorage.getItem("token") ? true : false;
};

export default function PrivateRoute({ children, ...rest }) {
  console.log(isAuthenticated());
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated() ? children : <Redirect to="/" />)}
    />
  );
}
