import React from 'react';
import  './styles.css'
import {Link} from 'react-router-dom';
const navbar = (props) =>(

   

        <nav className="navbar">

        <h3>What's Cooking?</h3>

        <div className="links">

            <ul>

            <li><Link className = 'link' to="/">Home</Link></li>
            <li><Link className = 'link' to="/login">Login</Link></li>
            <li><Link className = 'link' to="/signup">Register</Link></li>
            <li><Link className = 'link' to="/contact">Contact</Link></li>
            </ul>

        </div>

        <div className="menubar">

            <div className="bar bar1"></div>

            <div className="bar bar2"></div>

            <div className="bar bar3"></div>

        </div>

        </nav>
)

export default navbar;