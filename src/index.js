import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';

import Home from './components/Home/Home'
import CheckLogin from './components/Check/CheckLogin'

import './index.css';


ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" onEnter={CheckLogin} component={Home} />
        <Route path="/index" onEnter={CheckLogin} component={Home} />
        <Route path="*" onEnter={CheckLogin} component={Home}/>
    </Router>
),document.getElementById('root'));
