import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/d' component={Home} />
        <Route path='/d/:linkId' component={Home} />
        <Route>
          <NotFound message='Not Found' />
        </Route>
      </Switch>
      <Route exact path='/'>
        <Redirect to='/d' />
      </Route>
    </>
  );
};

export default App;
