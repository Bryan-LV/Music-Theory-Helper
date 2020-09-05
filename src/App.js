import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Readings, Theory, Tools } from './components/pages/index'
import Navbar from './components/layout/Navbar'
import { ChordDetection, Scales, ChordTypes } from './components/tool-components';

import './styles/App.css';


function App() {
  const [selectedTool, setTool] = useState('');

  return (
    <div className="App">
      {/* <Navbar /> */}
      <div>
        <Switch>
          <Route exact path="/">
            <Home setTool={setTool} />
          </Route>

          <Route exact path="/readings">
            <Readings />
          </Route>

          <Route exact path="/theory">
            <Theory />
          </Route>

          <Route exact path="/tools">
            <Tools setTool={setTool} />
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
