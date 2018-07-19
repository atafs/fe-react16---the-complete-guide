import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I AM A REACT APP!!</h1>
        <p>this is really working!!</p>
        <Person />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'M A REACT APP!!'))
  }
}

export default App;
