import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { nanoid } from 'nanoid';
import './App.css';

import Home from './components/Home';

const App = () => {
  const linkId = nanoid(10);

  return (
    <>
      <Switch>
        <Route path={`/${linkId}`} component={Home} />
        <Route path='/:linkId' component={Home} />
      </Switch>
      <Route path='/' exact>
        <Redirect to={`/${linkId}`} />
      </Route>
    </>
  );
};

export default App;
