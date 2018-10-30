import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SketchPad from './lib/SketchPad'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SketchPad />
        </header>
      </div>
    );
  }
}

export default App;
