import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFound from './components/NotFound';
import About from './components/About';
import Providers from './components/Providers';
import Provider from './components/Provider';
import Info from './components/Info';
import Job from './components/Jobs';

export default (
  <Route>
    <Route path="/" component={App} />
    <IndexRoute component={Jobs} />
    <Route path="/providers" component={Providers} />
    <Route path="/course/:id" component={Job} />
    <Route path="/info" component={Info} />
    <Route path="*" component={NotFound} />
  </Route>
)
