import React from 'react';
import ChordDetection from './components/ChordDetection';
import Scales from './components/Scales';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core';

import './styles/App.css';

function App() {
  return (
    <Container maxWidth="md" className="App">
      <h2>Music Theory Helper</h2>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/scales">
          <Scales />
        </Route>
        <Route exact path="/chordDetection">
          <ChordDetection />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
