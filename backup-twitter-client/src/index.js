import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Search from './pages/SearchPage';
import Profile from './pages/ProfilePage';

const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Search} />
        <Route path="search" component={Search} />
        <Route path="search/:screen_name/profile" component={Profile} />
      </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root')
);
registerServiceWorker();
