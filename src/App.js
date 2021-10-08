import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from './components/Home';

const App = () => {
  return (
    <>
      <Switch>
        <Route path='/d' component={Home} />
        <Route path='/d/:linkId' component={Home} />
      </Switch>
      <Route path='/' exact>
        <Redirect to='/d' />
      </Route>
    </>
  );
};

export default App;
