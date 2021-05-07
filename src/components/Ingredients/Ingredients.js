import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import classes from './styles.module.scss'

const Ingredients = (props) =>{

    console.log(props)
    const allIngredients = props.ingredients
    .map(ingredient =>{
        return(
            <Ingredient
                name = {ingredient.name}
                key = {ingredient.id}
            />
        )
    })

    return(
        <div className = {classes.IngredientsGrid}>
            {allIngredients}
        </div>
    )
}

export default Ingredients;