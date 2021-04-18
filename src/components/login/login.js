import React, { Component, useState, useContext } from "react";
import './styles.css';
import AccountContext from "../accountContext/accountContext";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

const Login = (props)=> {
  

  const [firstName, setFN] = useState(0);
  const [lastName, setLN] = useState(0);
  const [email, setEmail] = useState(0);
  const [passworde, setPass] = useState(0);
  const [formErrors, setformErrors] = useState(0);
  const { switchToSignup } = useContext(AccountContext);

  //const { formErrors } = this.state;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

//   const handleChange = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     let formErrors = { ...this.state.formErrors };

//     switch (name) {
//       case "firstName":
//         formErrors.firstName =
//           value.length < 3 ? "minimum 3 characaters required" : "";
//         break;
//       case "lastName":
//         formErrors.lastName =
//           value.length < 3 ? "minimum 3 characaters required" : "";
//         break;
//       case "email":
//         formErrors.email = emailRegex.test(value)
//           ? ""
//           : "invalid email address";
//         break;
//       case "password":
//         formErrors.password =
//           value.length < 6 ? "minimum 6 characaters required" : "";
//         break;
//       default:
//         break;
//     }

//     this.setState({ formErrors, [name]: value }, () => console.log(this.state));
//   };

    

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Login</h1>
          {/* <form onSubmit={this.handleSubmit} noValidate> */}
          <form>
            
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                //className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                //onChange={this.handleChange}
              />
              {/* {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )} */}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
               //className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                //onChange={this.handleChange}
              />
              {/* {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )} */}
            </div>
            <div className="createAccount">
              <button type="submit">Login</button>
              <small>Dont Have an Account?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }


export default Login;