import React, { useEffect, Component } from 'react';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import classes from './styles.module.scss'
import {useProv} from '../../components/accountContext/accountContext'
const Account = () =>{


const {getUserInfo} = useProv()
const {currUser} = useProv()
useEffect(() =>{
    getUserInfo()
}, [])
    

return(
    <>
        <NavBar/>
        <div className = {classes.wrapper}>
            <h2>{currUser.firstName} {currUser.lastName}</h2>
            <div className = {classes.infoContainer}>
            {currUser.email}
            </div>
        </div>
        <Footer/>
    </>
)
}

export default Account;