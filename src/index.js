import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from "./routes/route";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Router>
        <AppRoutes/>
    </Router>,
    document.getElementById('root')
);
reportWebVitals();
