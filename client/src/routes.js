//importing React dependency, App component and routes from packages
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Dashboard from './components/dashboard';
import Login from './components/login';

// defining the path parameter of our route, we are telling React to display
//the “App” component when the url is equal to this path
export default (
    <Route path='/' component={App}>
    <IndexRoute component={Dashboard}/>
    <Route path="dashboard" component={Dashboard} />
    <Route path="login" component={Login} />
    </Route>
    );
