import React from 'react';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './components/Home';
import ErrorPage from './components/shared/ErrorPage';
import ReactHelmet from './components/ReactHelmet';

const App = () => {
  const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;
  const history = createBrowserHistory();
  const pathName = window.location.pathname;

  ReactGA.initialize(TRACKING_ID);

  history.listen(() => {
    ReactGA.set({ page: pathName });
    ReactGA.pageview(pathName);
  });

  return (
    <Router history={history}>
      <ReactHelmet />
      <Switch>
        <Route exact path='/d' component={Home} />
        <Route path='/d/:linkId' component={Home} />
        <Route>
          <ErrorPage message='404 Not Found' />
        </Route>
      </Switch>
      <Route exact path='/'>
        <Redirect to='/d' />
      </Route>
    </Router>
  );
};

export default App;
