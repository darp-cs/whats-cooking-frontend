import React, { useEffect, Component } from 'react';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import classes from './styles.module.scss'
import {useProv} from '../../components/accountContext/accountContext'
import Ingredients from '../../components/Ingredients/Ingredients'

const MyFridge = () =>{

    const {getUserIngredients} = useProv()
    const {ingredients} = useProv()
    useEffect(() =>{
    getUserIngredients()
}, [])

    return(
    <>
        <NavBar/>
        <div className = {classes.Wrapper}>
            <div className  = {classes.Grid}>
                <div className ={classes.IngredientsContainer}>
		<h3>Ingredients</h3>
		<div></div>
                    <Ingredients ingredients = {ingredients}/>
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
    
