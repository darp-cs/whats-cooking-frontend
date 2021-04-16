import React, {useContext} from 'react';
import classes from './styles.module.scss'
import AccountContext from '../accountContext/accountContext'



const SignUp = (props) => {

        const { switchToSignin } = useContext(AccountContext);

        
        return(
        <div>
            <div className= {classes.signUpContainer}>

                <form >
                    <h2>Create Acccount</h2>


                    <label for='username'>Username
                        <input type='text' id ='username' name = 'username' placeholder= 'Username'/>
                    </label>

                    <label for='password'>Password
                        <input type='password' id ='password' name = 'password' placeholder= 'Password'/>
                    </label>

                    <label for='repassword'>Password
                        <input type='repassword' id ='repassword' name = 'repassword' placeholder= 'Password'/>
                    </label>

                    <button type = "submit">Login</button>
                    <button type = "submit">Create Account</button>
                    

                </form>
            </div>
        </div>
        )
}


export default SignUp;