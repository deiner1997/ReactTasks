import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './App';
import SignIn from './components/signIn';
import Dashboard from './components/dashboard';


const AppRoutes= ()  =>
<App>
    <Switch>
        <Route exact path='/SignIn' component={SignIn}/>
        <Route exact path='/Dashboard' component={Dashboard}/>
    </Switch>
</App>;
export default AppRoutes;