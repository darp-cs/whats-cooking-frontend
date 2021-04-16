import React, { createContext, useState } from "react";
import AccountContext from "../accountContext/accountContext";
import Login from '../login/login';
import SignUp from '../signup/signup';

const AccountBox = (props) =>{


  const { initialActive } = props;
  const [active, setActive] = useState(
    initialActive ? initialActive : "login"
  );



  const switchActive = (active) => {
    setTimeout(() => setActive(active), 400);
  };

  const switchToSignup = () => {
    switchActive("signup");
  };

  const switchToSignin = () => {
    switchActive("login");
  };

  const contextValue = {
    switchToSignup,
    switchToSignin,

  };

  return (
    <AccountContext.Provider value={contextValue}>
      
        
          
          {active === "login" && (
            <>
              Content Displayed if Loging in
              </>
          )}
          {active === "signup" && (
            <>
              Content Displayed if Signing in
              </>
          )}
        
        <div>
          {active === "login" && <Login />}
          {active === "signup" && <SignUp />}
        </div>
    
    </AccountContext.Provider>
  );
}

export default AccountBox;