import React from 'react'

// functional component es6
const person = (props) => {
    // deconstructing
    const {
        name,
        age
    } = props

    // dynamic content
    return <p>I'm {name} and I am {age} years old!!</p>
}

export default person
