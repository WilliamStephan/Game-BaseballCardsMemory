import React, { Component } from 'react';
import Board from './components/field/field';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
