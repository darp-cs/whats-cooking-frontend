import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

 const AccountContext = createContext();

 export function useProv(){
     return useContext(AccProvider)
 }
 export function AccProvider({children}){
    const [currUser, setCurrUser] = useState()
    let registerUrl = "https://whatscookingapi20210416192744.azurewebsites.net/api/authenticate/register";

    function register(email, password, firstName, lastName){
        return axios.post(registerUrl, {
            userName: email,
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
    }

    // useEffect( () =>{
    //     setCurrUser(user)
    // }, [])



    const value = {
        currUser, 
        register
    }
    return (

        <AccountContext.Provider>
            {children}
        </AccountContext.Provider>
    )
 };



