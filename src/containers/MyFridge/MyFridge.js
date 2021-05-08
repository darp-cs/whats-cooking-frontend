import React from 'react';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import classes from './styles.module.scss'
import Ingredients from '../../components/Ingredients/Ingredients'

const MyFridge = () =>{

    const prop = [
        {
            "name": "carrot",
            "id": 1
        },
        {
            "name": "onion",
            "id": 2
        },
        {
            "name": "steak",
            "id": 3
        },
        {
            "name": "banana",
            "id": 4
        },
        {
            "name": "apple",
            "id": 5
        },
        {
            "name": "chicken",
            "id": 6
        },
]

    return(
    <>
        <NavBar/>
        <div className = {classes.Wrapper}>
            <div className  = {classes.Grid}>
                <div className ={classes.IngredientsContainer}>
		<h3>Ingredients</h3>
		<div></div>
                    <Ingredients ingredients = {prop}/>
                </div>
                
                <div  className = {classes.SuggestedContainer}>
                    <h3>Suggested</h3>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    )
}

export default MyFridge;
    
