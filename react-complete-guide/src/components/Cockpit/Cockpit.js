import React, { Fragment } from 'react'

import classes from './Cockpit.css'

const cockpit = (props) => {
    // dynamic style from stylesheet
    // let classes = ['red', 'bold'].join(' ')
    const assignClasses = []
    if (props.persons.length <= 2) {
      assignClasses.push(classes.red) // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignClasses.push(classes.bold) // classes = ['red', bold']
    }

    // change button color to red
    let btnClass = classes.Button
    if (props.showPerson) {
        btnClass = [classes.Button, classes.Red].joint(' ')
    }

    return (
        <Fragment>
            <h1>{props.appTitle}</h1>
            <p className={assignClasses.join(' ')}>This is really working!!</p>
            <button 
            className={btnClass}
            onClick={props.clicked}
            >
                Switch Name
            </button>  
        </Fragment>
    )
}

export default cockpit