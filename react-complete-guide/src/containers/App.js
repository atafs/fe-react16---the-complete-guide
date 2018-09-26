import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux'
import widthClassStateless from '../hoc/widthClassStateless'

export const AuthContext = React.createContext(false)
class App extends PureComponent {
  constructor(props) {
    super(props)
    console.log('[APP.js] inside constructor')
  }

    // if state is change, the app is re-rendered
    state = {
      persons: [
        { id: 'axs324', name: 'Americo', age:'39' },
        { id: 'gfv325', name: 'Guida', age:'42' },
        { id: 'uht653', name: 'Hugo', age:'1' }
      ],
      toggleClicked: 0,
      authenticated: false
    }

  componentWillMount() {
    // it is being deprecated this method!!
    console.log('[APP.js] inside componentWillMount')
  }

  componentDidMount() {
    console.log('[APP.js] inside componentDidMount')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE APP.js] inside shouldComponentUpdate', nextProps, nextState)

  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons
  //   // return true
  // }

  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE APP.js] inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate() {
      console.log('[UPDATE APP.js] inside componentDidUpdate')
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
    this.setState((prevState, props) => { 
      console.log('[SET_STATE APP.js] togglePersonsHandler - prevState', prevState)
      console.log('[SET_STATE APP.js] togglePersonsHandler - props', props)
  
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
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
          isAuthenticated={this.state.authenticated}
        />
      )
    }
    
    return (
      <Aux>
        <button
          onClick={() => {this.setState({showPersons: true})}}
        >
          Show Persons
        </button>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.togglePersonsHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'M A REACT APP!!'))
  }
}

export default widthClassStateless(App, classes.App)
