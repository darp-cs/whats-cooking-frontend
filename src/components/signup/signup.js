import React, { Component, useState, useContext } from "react";
import './styles.css';
import AccountContext from "../accountContext/accountContext";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = (formErrors) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
//   Object.values(rest).forEach(val => {
//     val === null && (valid = false);
//   });

  return valid;
};

const SignUp = (props)=> {
  

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
    const { switchToSignin } = useContext(AccountContext);
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
    const { name, value } = e.target;
    console.log(e.target)
    let err = { ...formErrors };
    console.log(err)
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
                onChange={handleChange}
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
                onChange={handleChange}
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
              <button type="submit">Create Account</button>
              <small onClick={switchToSignin}>Already Have an Account?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }


export default SignUp;