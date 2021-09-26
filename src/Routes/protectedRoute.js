import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import AdSubmitPage from "../Pages/AdSubmitPage";

const ProtectedRoute = () => {
  return (
    <Switch>
        <Route path= '/profile/:id' exact component={ProfilePage} />
        <Route path='/submitads' exact  component={AdSubmitPage} />
    </Switch>
  );
};

export default ProtectedRoute;