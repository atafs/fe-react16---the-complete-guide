import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('[APP.js] inside constructor')
  }

  componentWillMount() {
    // it is being deprecated this method!!
    console.log('[APP.js] inside componentWillMount')
  }

  componentDidMount() {
    console.log('[APP.js] inside componentDidMount')
  }

  // if state is change, the app is re-rendered
  state = {
    persons: [
      { id: 'axs324', name: 'Americo', age:'39' },
      { id: 'gfv325', name: 'Guida', age:'42' },
      { id: 'uht653', name: 'Hugo', age:'1' }
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
      otherState: 'some other state',
      showPersons: false
    })
  }

  nameChangedHandler = (event, id) => {
    // person index
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    // person with an immutable object (could use Object.assign())
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value

    // persons in an immutable object
    const persons = [...this.state.persons]
    persons[personIndex] = person
  
    // update state
    this.setState( {persons} )
  }

  deletePersonHandler = (personIndex) => {
    /* Both ways are valid to update state in an immutable way 
       (arrays and objects are references in js) 
    */
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    console.log('[APP.js] inside render')
    console.info(this.state)

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      )
    }
    
    return (
      <div className={classes.App}>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons} 
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler}
        />
        {persons} 
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'M A REACT APP!!'))
  }
}

export default App;
