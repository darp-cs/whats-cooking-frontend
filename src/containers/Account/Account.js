import React from 'react';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import classes from './styles.module.scss'
import {useProv} from '../../components/accountContext/accountContext'
const Account = () =>{


const {getUserInfo} = useProv()

return(
    <>
        <NavBar/>
        <div className = {classes.wrapper}>
            <h2> </h2>
            <div className = {classes.infoContainer}>
            
            </div>
        </div>
        <Footer/>
    </>
)
}

export default Account;