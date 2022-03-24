import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import * as Auth from "../helpers/auths";

const AdminProtected = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Auth.validAdmin() ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
      )
    }
  />
);

export default AdminProtected;