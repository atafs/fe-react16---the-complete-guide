import React from 'react'

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
    let btnClass = ''
    if (props.showPerson) {
        btnClass = classes.Red
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignClasses.join(' ')}>This is really working!!</p>
            <button 
            className={btnClass}
            onClick={props.clicked}
            >
                Switch Name
            </button>  
        </div>   
    )
}

export default cockpit