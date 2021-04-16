import React, {useContext} from 'react';
import classes from './styles.module.scss'
import AccountContext from "../accountContext/accountContext";

const Login = (props) => {


    console.log("in Login")
    const { switchToSignup } = useContext(AccountContext);
        return (
        <div>
            <div className= {classes.loginContainer}>

                <form >
                    <h2>Whats Cooking?</h2>


                    <label for='username'>Username
                        <input type='text' id ='username' name = 'username' placeholder= 'Username'/>
                    </label>

                    <label for='password'>Password
                        <input type='password' id ='password' name = 'password' placeholder= 'Password'/>
                    </label>

                    <button type = "submit">Login</button>
                    <button type = "submit">Create Account</button>

                </form>
            </div>
        </div>
        )
}


export default Login;