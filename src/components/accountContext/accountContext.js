import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

 const AccountContext = createContext();

 export function useProv(){
     return useContext(AccountContext)
 }
 export function AccProvider({children}){
    const [currUser, setCurrUser] = useState()
    const [ingredients, setIngredients] = useState()
    const [recipes, setRecipes] = useState()
    const value = {
        getUserRecipes, 
        register,
        login,
        addUserRecipe,
        getUserIngredients,
        addUserIngredients,
        getUserInfo,
        logout
    }
    let registerUrl = "https://whatscookingapi20210416192744.azurewebsites.net/api/authenticate/register";
    let loginUrl = "https://whatscookingapi20210416192744.azurewebsites.net/api/authenticate/login";
    let recipeUrl  = "https://whatscookingapi20210416192744.azurewebsites.net/api/UserRecipe"
    let ingredientsUrl = "https://whatscookingapi20210416192744.azurewebsites.net/api/UserRecipe"
    let userUrl = "https://whatscookingapi20210416192744.azurewebsites.net/api/UserRecipe"



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
                localStorage.setItem('token', response.data.token);
      
        })
      }

      function getUserRecipes(){
          axios.get(recipeUrl,{
            
          })
          .then((response) =>{
              console.log(response)
          })
      }

      function addUserRecipe(toAdd){
          axios.post(recipeUrl,{
            
          })
      }

      function getUserIngredients(){

      }

      function addUserIngredients(toAdd){

      }

      async function getUserInfo(){
        let token = localStorage.getItem('token')
        let url = userUrl
        return await axios.get(url, {
            headers:{
                'Authorization':'Bearer'+token
            }
        }).then((response =>{
            console.log(response)
        })
            
        )

        
      }


      function logout(){
        localStorage.removeItem('token');
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



