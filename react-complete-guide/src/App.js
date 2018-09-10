import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person'

class App extends Component {
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
    console.info(this.state)

    const styles = {
      button: {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      },
      paragraph: {
        color: 'blue',
        cursor: 'pointer'
      }
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                key={person.id}
                style={styles.paragraph}
                name={person.name} 
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }
        </div>
      )

      // dynamic style for button
      styles.button.backgroundColor = 'red'
    }

    // dynamic style from stylesheet
    // let classes = ['red', 'bold'].join(' ')
    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red') // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold') // classes = ['red', bold']
    }

    return (
      <div className="App">
        <h1>I AM A REACT APP!!</h1>
        <p className={classes.join(' ')}>This is really working!!</p>
        <button 
          onClick={this.togglePersonsHandler}
          style={styles.button}
        >
            Switch Name
        </button>   
        {persons} 
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'M A REACT APP!!'))
  }
}

export default App;
