import React from 'react';
import classes from './styles.module.scss'
const Ingredient = (props) =>(
    <div className = {classes.Ingredient}>
        {props.name}
    </div>
)

export default Ingredient;