import React from 'react';
import {Route} from 'react-router';
import LoginComponent from "./login.component";
import SignupComponent from "./signup.component";
import App from "../../App";

const AuthRoutes = (
    <Route  path="auth" component={App}>
        <Route  path="/login" component={LoginComponent}/>
        <Route  path="/register" component={SignupComponent}/>
    </Route>
)
export default AuthRoutes