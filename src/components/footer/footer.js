import React from 'react';
import classes from './styles.module.scss'
const Footer = () =>(
    <div className = {classes.footerContainer}>
    <footer className ={classes.footer}>


        <ul className = {classes.colOne}>
            <li>
                Instagram
            </li>
        </ul>

        <ul className = {classes.colTwo}>
            <li>
                Facebook
            </li>
        </ul>

        <ul className = {classes.colThree}>
            <li>
                Twitter
            </li>
        </ul>

    </footer>
    </div>
)

export default Footer;