import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from   'react-router-dom'
import AppRoutes from './routes';

ReactDOM.render(
<Router>
    <AppRoutes/>
</Router>
, document.getElementById('root'));
registerServiceWorker();
