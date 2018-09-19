import React, { Component } from 'react'

import classes from './Person.css'

// functional component es6
class Person extends Component {
    render() {
        // destructuring
        const {
            name,
            age,
            click,
            changed,
            children
        } = this.props
        
        // dynamic content
        return (
            <div className={classes.Person}>
                <p onClick={click}>I am {name} and I am {age} years old</p>
                <p>{children}</p>
                <input 
                    type="text" 
                    onChange={changed} 
                    value={name}
                />
            </div>
        )
    }
}

export default Person
