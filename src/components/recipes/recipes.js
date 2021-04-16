import React from 'react';
import RecipeList from '../recipeList/recipeList';

const Recipes = (props) =>{

    const trending = props.recipes

    let getTrending = () =>{

    }


    return (
        <>

        <div>Recipes Page</div>
        <RecipeList trending = {trending}/>
        </>
    )
}



export default Recipes;