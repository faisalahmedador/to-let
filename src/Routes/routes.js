import React from 'react'
import UpperHeader from "../Components/UpperHeader/UpperHeader";
import Header from "../Components/Header/Header";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Default from "../Pages/Default/Default";
import { Switch, Route, Redirect, BrowserRouter  } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import SearchResult from "../Pages/SearchResult/SearchResult";
import AdminProtected from './adminProtectedRoute';
import ProtectedRoute from './protectedRoute';
import Login from '../Components/LogIn/LogIn';
import Signup from "../Components/Signup/Signup";
import ForgotPassword from "../Components/ForgotPassword/ForgotPassword";
import AdvertisementDetails from '../Pages/advertisementDetails/advertisementDetails';

const Routes = () => {

  return (
    <BrowserRouter>
      <UpperHeader />
      <Header />
      {/* <HeaderDiv /> */}
      <>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/addetails" exact component={AdvertisementDetails} />
          <Route path='/searchresult' exact component={SearchResult} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/forgotpassword' component={ForgotPassword} />
          <AdminProtected component={ProtectedRoute} />
          <Route path="/notFound" component={Default} />
          <Route path="*">
            <Redirect to="/notFound" />
          </Route>
        </Switch>
      </>
      <Footer />
    </BrowserRouter>
  )

}

export default Routes;

