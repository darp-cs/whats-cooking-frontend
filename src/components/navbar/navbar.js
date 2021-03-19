import React from 'react';
import classes from './styles.module.scss'
const navbar = () =>(

    <div>
        <ul className = {classes.navContainer}>
            <li className= {classes.logo}>What's Cooking?</li>
            <li>Home</li>
            <li>My Fridge</li>
            <li>Recipes</li>
            <li>Account</li>
        </ul>
    </div>
)

export default navbar;