import React, { Component } from 'react'

import Person from './Person/Person'

class Persons extends Component {
    constructor(props) {
        super(props)
        console.log('[Persons.js] inside constructor')
        this.lastPersonRef = React.createRef()
    }

    /* LIFECYCLE */
    componentWillMount() {
        // it is being deprecated this method!!
        console.log('[Persons.js] inside componentWillMount')
    }

    componentDidMount() {
        console.log('[Persons.js] inside componentDidMount')
    }
    componentWillUnmount() {
        console.log('[Persons.js] inside componentWillUnmount')
    }

    /* UPDATE LIFECYCLE */
    componentWillReceiveProps() {
        console.log('[UPDATE Persons.js] inside componentWillReceiveProps')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] inside shouldComponentUpdate', nextProps, nextState)
        // - if it return true, the update continues...
        // - if we return false, the update stops!!
        // ... can be useful for components that receive a lot of props 
        // but we only what to re-render only when of them changes!!
        // improving greatly the performance of the App!!
        
        // shallow comparison of these objects (that is why this is true)
        return nextProps.persons !== this.props.persons ||
        nextProps.changed !== this.props.changed ||
        nextProps.clicked !== this.props.clicked
        // return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] inside componentWillUpdate', nextProps, nextState)
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] inside componentDidUpdate')
    }

    render() {
        console.log('[Persons.js] inside render')

        return this.props.persons.map(( person, index ) => {
            return <Person 
                key={person.id}
                position={index}
                ref={this.lastPersonRef}
                name={person.name} 
                age={person.age}
                click={() => this.props.clicked( index )}
                changed={( event ) => this.props.changed( event, person.id )}
            />
            }
        )
    }
}

export default Persons