import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router, browserHistory }  from 'react-router';
import Routes from './routes';
import { App } from './container';

const component = (<Router history={browserHistory} routes={Routes()}/>);

ReactDOM.render(component, document.getElementById('root'));
