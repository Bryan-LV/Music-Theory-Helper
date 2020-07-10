import React from 'react'
import ChordDetection from './components/ChordDetection'
import Scales from './components/Scales'
import Home from './components/Home'
import Navbar from './components/layout/Navbar'
import { Switch, Route } from 'react-router-dom'

import './styles/App.css';
import Resources from './components/Resources'


function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          <Route exact path="/scales">
            <Scales />
          </Route>
          <Route exact path="/chordDetection">
            <ChordDetection />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
