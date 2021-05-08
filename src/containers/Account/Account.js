import React from 'react';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import classes from './styles.module.scss'
import {useProv} from '../../components/accountContext/accountContext'
const Account = () =>{


const {getUserInfo} = useProv()
const test  = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'

return(
    <>
        <NavBar/>
        <div className = {classes.wrapper}>
            <h2>John Smith</h2>
            <h3> john.smith@gmail.com</h3>
            <div className = {classes.infoContainer}>
            </div>
            <div> <img src = {test}/> </div>
        </div>
        <Footer/>
    </>
)
}

export default Account;