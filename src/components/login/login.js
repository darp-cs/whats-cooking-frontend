import React, { Component, useState, useContext } from "react";
import './styles.css';
import AccountContext from "../accountContext/accountContext";
import axios from 'axios';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = (formErrors) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  return valid;
};

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

const loginUrl = "https://whatscookingapi20210416192744.azurewebsites.net/api/authenticate/login";

const Login = (props)=> {
  

  const [firstName, setFN] = useState(0);
  const [lastName, setLN] = useState(0);
  const [email, setEmail] = useState(0);
  const [password, setPass] = useState(0);
  const initialFormErrors = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const{ switchToSignup } = useContext(AccountContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(formErrors)) {
      console.log(`
        --SUBMITTING--
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Password: ${password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e)
    const { name, value } = e.target;
    let err = { ...formErrors };

    switch (name) {
      case "firstName":
        err.firstName =
          value.length < 3 ? "minimum 3 characaters required" : value;
        break;
      case "lastName":
        err.lastName =
          value.length < 3 ? "minimum 3 characaters required" : value;
        break;
      case "email":
        err.email = emailRegex.test(value)
          ? value
          : "invalid email address";
        break;
      case "password":
        err.password =
          value.length < 6 ? "minimum 6 characaters required" : value;
        break;
      default:
        break;
    }
        setFormErrors(err)
   };

    

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Login</h1>
         
          <form  onSubmit={handleSubmit} noValidate >
            
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={handleChange}
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
                onChange={handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Submit</button>
              <small onClick={switchToSignup} >Dont Have an Account? Sign Up</small>
            </div>
          </form>
        </div>
      </div>
    );
  }


export default Login;