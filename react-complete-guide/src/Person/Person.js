import React from 'react'
import Radium from 'radium'

import './Person.css'

// functional component es6
const person = (props) => {
    // destructuring
    const {
        name,
        age,
        style,
        click,
        changed
    } = props

    // media query with radium
    const styles = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    }

    // dynamic content
    return (
        <div className="Person" style={styles}>
            <p style={style} onClick={click}>I am {name} and I am {age} years old</p>
            <p>{props.children}</p>
            <input 
                type="text" 
                onChange={changed} 
                value={name}
            />
        </div>
    )
}

export default Radium(person)
