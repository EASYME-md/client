import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { nanoid } from 'nanoid';
import './App.css';

import Title from './components/Title';
import Editor from './components/Editor';
import Preview from './components/Preview';
import SharingButton from './components/SharingButton';

const App = () => {
  const linkId = nanoid(10);

  return (
    <>
      <Switch>
        <Route path={`/${linkId}`}>
          <SharingButton />
          <Title />
          <Editor />
          <Preview />
        </Route>
        <Route path='/:linkId'>
          <SharingButton />
          <Title />
          <Editor />
          <Preview />
        </Route>
      </Switch>
      <Route path='/' exact>
        <Redirect to={`/${linkId}`} />
      </Route>
    </>
  );
};

export default App;
