import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I AM A REACT APP!!</h1>
        <h3>This is really working!!</h3>
        <Person name="Americo" age="39"/>
        <Person name="Guida" age="42"/>
        <Person name="Hugo" age="1"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'M A REACT APP!!'))
  }
}

export default App;
