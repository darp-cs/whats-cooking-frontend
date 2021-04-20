import React from 'react';
import classes from './styles.module.scss'
import NavBar from '../../components/navbar/navbar'

const Contact  = () =>(
    <>
    <NavBar/>
    <div className = {classes.contactBack}>
        <div className = {classes.wrapper}>
            <form className ={classes.contactForm} action="/" method="post">
        
                <h3>Get in touch</h3>
                <h4>Fill in the form below, and we'll get back to you within 24 hours.</h4>
                <div>
                    <label>
                        <span>Name:</span>
                        <input placeholder="Please enter your name" type="text" tabindex="1" required autofocus/>
                    </label>
                </div>

                <div>
                    <label>
                        <span>Email: </span>
                        <input placeholder="Please enter your email address" type="email" tabindex="2" required/>
                    </label>
                </div>

                <div>
                <label>
                    <span>Telephone: </span>
                    <input placeholder="Please enter your number" type="tel" tabindex="3" required/>
                </label>
            </div>
            
            <div>
                <label>
                    <span>Message: </span>
                    <textarea placeholder="Include all the details you can" tabindex="5" required></textarea>
                </label>
            </div>
            <div>
                <button name="submit" type="submit" id="contact-submit">Send Email</button>
            </div>
        </form>
    </div>
</div>
</>


)
export default Contact;