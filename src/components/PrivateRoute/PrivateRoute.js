import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import {useProv} from '../accountContext/accountContext'


export default function PrivateRoute({component: Component, ...rest})
{
    const {currUser} = useProv()

    return(
        <Route {...rest}>
            
            render = {props =>{
                return currUser ? <Component {...props}/> : <Redirect to="/login"/>
            }}
        </Route>
    )
}