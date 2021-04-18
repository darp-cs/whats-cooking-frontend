import React from 'react';
import  './styles.css'
import {Link} from 'react-router-dom';
const navbar = (props) =>(

   

        <nav class="navbar">

        <h3>logo</h3>

        <div class="links">

            <ul>

            <li><Link className = 'link' to="/">Home</Link></li>
            <li><Link className = 'link' to="/access/login">Login</Link></li>
            <li><Link className = 'link' to="/access/signup">Register</Link></li>
            <li><Link className = 'link' to="/contact">Contact</Link></li>

            </ul>

        </div>

        <div class="menubar">

            <div class="bar bar1"></div>

            <div class="bar bar2"></div>

            <div class="bar bar3"></div>

        </div>

        </nav>
)

export default navbar;