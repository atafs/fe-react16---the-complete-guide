import React from 'react'

// functional component es6
const person = (props) => {
    // destructuring
    const {
        name,
        age,
        click
    } = props

    // dynamic content
    return (
        <div>
            <p onClick={click}>I am {name} and I am {age} years old</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person
