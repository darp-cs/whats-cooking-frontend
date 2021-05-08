import classes from './App.module.scss'
import Home from './containers/Home/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from './containers/Contact/Contact'
import MyFridge from  './containers/MyFridge/MyFridge'
import SignUp from './components/signup/signup';
import Login from './components/login/login'
import {AccProvider} from './components/accountContext/accountContext'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Account from  './containers/Account/Account'
import Recipes from './containers/Recipes/Recipes'


function App() {
  return (
    
      <div className = {classes.app}>
        <Router>
        <AccProvider>  
          <Switch>
            <Route path = "/" exact component = {Home}/>
            <Route path = "/contact"  component = {Contact}/>
            <Route path = "/signup"  component = {SignUp}/>
            <Route path = "/fridge"  component = {MyFridge}/>
            {/* <PrivateRoute exact path = "/" component = {MyFridge}/> */}
            <Route path = "/account"  component = {Account}/>
            {/* <PrivateRoute exact path = "/" component = {Account}/> */}
            <Route path = "/recipes"  component = {Recipes}/>
            {/* <PrivateRoute exact path = "/" component = {Account}/> */}
            <Route path = "/login"  component = {Login}/>
          </Switch>
          </AccProvider>
        </Router>
      </div>
    
  );
}

export default App;
