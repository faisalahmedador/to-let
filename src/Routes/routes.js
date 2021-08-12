import React from 'react'
import UpperHeader from "../Components/UpperHeader/UpperHeader";
import Header from "../Components/Header/Header";
import LandingPage from "../Pages/LandingPage";
import AdDetails from "../Pages/AdDetails";
import Default from "../Pages/Default/Default";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import AdSubmitPage from "../Pages/AdSubmitPage";
import SearchResult from "../Pages/SearchResult";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";

const Routes = () =>{

    return(
        <>
        <UpperHeader />
        <Header />
        {/* <HeaderDiv /> */}
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/addetails" exact  component={AdDetails} />
            <Route path='/submitads' exact  component={AdSubmitPage} />
            <Route path= '/searchresult' exact component={SearchResult} />
            <Route path= '/profile/:id' exact component={ProfilePage} />
            <Route path="/notFound" component={Default} />
            <Route path="*">
            <Redirect to="/notFound" />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
        </>
    )

}

export default Routes;

