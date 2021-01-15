import LoginComponent from "../components/auth/login.component";
import '../App.sass';
import {Switch, Route} from 'react-router';
import Navbar from "../components/layout/navbar";
import SignupComponent from "../components/auth/signup.component";
import React from "react";
import Home from "../components/home";
import Search from "../components/search/search";

export const AppRoutes = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/auth/login" component={LoginComponent}/>
                <Route exact path="/auth/register" component={SignupComponent}/>
                <Route exact path="/search" component={Search}/>
            </Switch>
        </div>
    )
}
export default AppRoutes;