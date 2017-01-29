import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFound from './components/NotFound';
import About from './components/About';
import Courses from './components/Courses';
import Course from './components/Course';
import Info from './components/Info';

export default (
  <Route>
    <Route path="/" component={App} />
    <IndexRoute component={Courses} />
    <Route path="/about" component={About} />
    <Route path="/course/:id" component={Course} />
    <Route path="/info" component={Info} />
    <Route path="*" component={NotFound} />
  </Route>
)
