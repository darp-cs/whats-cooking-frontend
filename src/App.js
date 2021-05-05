import logo from './logo.svg';
import classes from './App.module.scss'
import Home from './containers/Home/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from './containers/Contact/Contact'
import Account from  './containers/Account/Account'
import SignUp from './components/signup/signup';
import Login from './components/login/login'

// Everything below will be deleted

function App() {
  return (

    <div className = {classes.app}>
      <Router>
        <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/contact" exact component = {Contact}/>
          <Route path = "/signup" exact component = {SignUp}/>
          <Route path = "/account" exact component = {Account}/>
          <Route path = "/login" exact component = {Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
