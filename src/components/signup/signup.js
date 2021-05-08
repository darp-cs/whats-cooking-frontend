import React, { Component, useState, useContext } from "react";
import {Link} from 'react-router-dom';
import NavBar from '../navbar/navbar';
import Footer from '../footer/footer';
import './styles.css';
import AccountContext from "../accountContext/accountContext";
import {useProv} from '../accountContext/accountContext'

const SignUp = ()=> {
  

    const [loading, setLoading] = useState(false);
    const initialFormErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const {register} = useProv()
    const [error, setError] = useState();

    async function handleSubmit(e){
      e.preventDefault();

      let temail = e.target[0].value
      let tpassword = e.target[0].value
      let tfirstName = e.target[0].value
      let tlastName = e.target[0].value
      

      try {
        setError('')
        setLoading(true)
        await register(temail, tpassword, tfirstName, tlastName)
      } catch{
        setError('Failed to create account')  
      }

      setLoading(false)


    };
    

    const formValid = (fE) => {
      let valid = true;
      Object.values(fE).forEach(val => {
        val.length > 0 && (valid = false);
      });
      return valid;
  };



    return (
      <>
        <NavBar/>
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate

              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
               className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button disable = {loading} type="submit">Create Account</button>
              <small>Already Have an Account? <Link to = "/login">Login </Link></small>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
        </>
    );
  }


export default SignUp;