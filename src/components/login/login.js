import React from 'react';
import classes from './styles.module.scss'


const login = () => (

        <div>
            <div className= {classes.loginContainer}>

                <form >
                    <h2>Whats Cooking?</h2>


                    <label for='username'>Username
                        <input type='text' id ='username' name = 'username' placeholder= 'Username'/>
                    </label>

                    <label for='password'>Password
                        <input type='password' id ='username' name = 'username' placeholder= 'Username'/>
                    </label>

                    <button type = "submit">Login</button>
                    <button type = "submit">Create Account</button>
                    

                </form>
            </div>
        </div>
)


export default login;