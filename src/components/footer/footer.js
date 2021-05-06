import React from 'react';
import classes from './styles.module.scss'
const Footer = () =>(
    <div className = {classes.footerContainer}>
    <footer className ={classes.footer}>


        <ul className = {classes.colOne}>
            <li>
                <a href = "www.instagram.com" class = "fa fa-instagram"></a>
            </li>
        </ul>

        <ul className = {classes.colTwo}>
            <li>
                <a href = "www.facebook.com" class = "fa fa-facebook"></a>
            </li>
        </ul>

        <ul className = {classes.colThree}>
            <li>
                <a href = "www.twitter.com" class = "fa fa-twitter" target="_blank"></a>
            </li>
        </ul>

    </footer>
    </div>
)

export default Footer;