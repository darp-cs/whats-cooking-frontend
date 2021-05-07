import React, { Component, useState, useContext} from "react";
import {Link} from 'react-router-dom';
import NavBar from '../navbar/navbar';
import Footer from '../footer/footer';
import {useProv} from '../accountContext/accountContext'
import './styles.css';





function Login() {
  


  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const {login} = useProv()
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);


  async function handleSubmit(e){
    e.preventDefault();


    try {
      setError('')
      setLoading(true)
      await login(email, password)
    } catch{
      setError('Failed to Login')  
    }

    setLoading(false)


  };


    return (
      <>
        <NavBar/>
        <div className = "wrapper">
          
          <div className = "form-wrapper">
            
          <h1>Login</h1>
   
           <form onSubmit={handleSubmit}  noValidate >
        
             <div className="email">
               <label htmlFor="email">Email</label>
              <input
                 placeholder="Email"
                 type="email"
                 name="email"
                 noValidate
               />
             </div>
             <div className="password">
               <label htmlFor="password">Password</label>
               <input
                 placeholder="Password"
                 type="password"
                 name="password"
                 noValidate
               />

             </div>

             <div className = "createAccount">
               <button type = "submit"> Submit </button>
               <small>Dont ahve an Account?  <Link to = "/login">Register</Link></small>
             </div>
             
           </form> 
          </div>
          
        </div>
        <Footer/>
        </>

    );
  }


export default Login;