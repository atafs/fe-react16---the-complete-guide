import React from 'react'

export default props => {
    const { classes, children } = props

    return (
        <div className={classes}>
            {children}
        </div> 
    )
}