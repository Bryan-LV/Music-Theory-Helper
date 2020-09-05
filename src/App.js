import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './components/pages/index'
import { ChordDetection, Scales, ChordTypes } from './components/tool-components';

import './styles/App.css';


function App() {

  return (
    <div className="App">
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/tools/chord-detection">
            <ChordDetection />
          </Route>

          <Route exact path="/tools/scales">
            <Scales />
          </Route>

          <Route exact path="/tools/chord-types">
            <ChordTypes />
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
