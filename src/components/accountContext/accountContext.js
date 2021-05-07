import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

 const AccountContext = createContext();

 export function useProv(){
     return useContext(AccountContext)
 }
 export function AccProvider({children}){
    const [currUser, setCurrUser] = useState()
    const value = {
        // currUser, 
        register,
        login
    }
    let registerUrl = "https://whatscookingapi20210416192744.azurewebsites.net/api/authenticate/register";
    let loginUrl = "https://whatscookingapi20210416192744.azurewebsites.net/api/authenticate/login";
    function register(email, password, firstName, lastName){
        return axios.post(registerUrl, {
            userName: email,
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
    }

    function login(username, password){

        axios.post(loginUrl, {
            userName: username,
            password: password
        })
        .then((response) => {
      
            if(response.data)
            // We set the token in local storage so we can use it for requests that require auth or to check logged in status
                localStorage.setItem('token', response.data.token);
      
        })
      }

      function logout(){
        localStorage.removeItem('token');
        // navigate to login screen here or wherever you want to redirect to on logout
    }

    // useEffect( () =>{
    //     setCurrUser(user)
    // }, [])

    
    return (

        <AccountContext.Provider value = {value}>
            {children}
        </AccountContext.Provider>
    )
 };



