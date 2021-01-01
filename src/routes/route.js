import LoginComponent from "../components/auth/login.component";
import '../App.sass';
import {Switch, Route} from 'react-router';
import Navbar from "../components/layout/navbar";
import SignupComponent from "../components/auth/signup.component";
import React from "react";
import Home from "../components/home";

export const AppRoutes = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/auth/login" component={LoginComponent}/>
                <Route exact path="/auth/register" component={SignupComponent}/>
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
    )
}
export default AppRoutes;