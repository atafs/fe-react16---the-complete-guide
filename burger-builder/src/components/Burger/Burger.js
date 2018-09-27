import React from 'react'

import classes from './Burger.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            console.info('props.ingredients[igKey]', props.ingredients[igKey])
            console.info(' [...Array(props.ingredients[igKey])]',  [...Array(props.ingredients[igKey])])
            return [...Array(props.ingredients[igKey])]
            .map((_, i) => {
                console.info('igKey + i', igKey + i)
                console.info('<BurgerIngredient key={igKey + i} type={igKey} />', <BurgerIngredient key={igKey + i} type={igKey} />)
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        })
        .reduce((arr, el) => {
            console.info('arr and el', arr, el)
            return arr.concat(el)
        }, [])
    
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    console.info('transformedIngredients', transformedIngredients)

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger