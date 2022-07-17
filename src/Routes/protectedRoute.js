import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import UserAddList from "../Components/AdList/UserAddList";
import AdInfoPage from "../Components/AdInfoPage/AdInfoPage";

const ProtectedRoute = () => {
  return (
    <Switch>
        <Route path= '/profile/:id' exact component={ProfilePage} />
        <Route path='/userAds' exact component={UserAddList} />
        <Route path='/myads/:id' exact component={AdInfoPage} />
        
    </Switch>
  );
};

export default ProtectedRoute;