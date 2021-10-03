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
        <Route path={`/${linkId}`}>
          <Home />
        </Route>
        <Route path='/:linkId'>
          <Home />
        </Route>
      </Switch>
      <Route path='/' exact>
        <Redirect to={`/${linkId}`} />
      </Route>
    </>
  );
};

export default App;
