import React from 'react'

// functional component es6
const person = (props) => {
    // destructuring
    const {
        name,
        age
    } = props

    // dynamic content
    return (
        <div>
            <p>I'm {name} and I am {age} years old!!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person
