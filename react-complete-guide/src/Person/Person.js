import React from 'react'
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

    // dynamic content
    return (
        <div className="Person">
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

export default person
