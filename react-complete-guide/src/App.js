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

  switchNameHandler = (newName) => {
    console.info('The button was Clicked!!')

    // change state in an immutable and safe way
    this.setState({
      persons: [
        { name: newName, age:'39!!' },
        { name: 'Guida!!', age:'42!!' },
        { name: 'Hugo!!', age:'1!!' }
      ],
      otherState: 'some other state'
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Americo', age:'39!!' },
        { name: 'Guida', age:'42!!' },
        { name: event.target.value, age:'1 1/2' }
      ],
      otherState: 'some other state'
    })
  }

  render() {
    console.info(this.state)

    return (
      <div className="App">
        <h1>I AM A REACT APP!!</h1>
        <h3>This is really working!!</h3>
        <button onClick={() => this.switchNameHandler('AMERICO!!££')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'AMERICO!!@@')}
          changed={this.nameChangeHandler}
        >
            Our Wonderful Baby with an onClick event
        </Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'M A REACT APP!!'))
  }
}

export default App;
