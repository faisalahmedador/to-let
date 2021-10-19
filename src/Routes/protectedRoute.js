import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import AdSubmitPage from "../Pages/AdSubmitPage";
import UserAddList from "../Components/AdList/UserAddList";

const ProtectedRoute = () => {
  return (
    <Switch>
        <Route path= '/profile/:id' exact component={ProfilePage} />
        <Route path='/submitads' exact  component={AdSubmitPage} />
        <Route path='/myads' exact component={UserAddList} />
    </Switch>
  );
};

export default ProtectedRoute;