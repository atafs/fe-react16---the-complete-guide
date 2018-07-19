import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

class App extends Component {
  // if state is change, the app is re-rendered
  state = {
    persons: [
      { name: 'Americo', age:'39' },
      { name: 'Guida', age:'42' },
      { name: 'Hugo', age:'1' }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>I AM A REACT APP!!</h1>
        <h3>This is really working!!</h3>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Our Wonderful Baby</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'M A REACT APP!!'))
  }
}

export default App;
