import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainPage from './components/main/index';
import App from './components/index';

export default (
  <div>
    <Route path='/' component={App}>
    </Route>
  </div>
);
