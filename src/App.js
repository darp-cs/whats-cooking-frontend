import logo from './logo.svg';
import classes from './App.module.scss'
import Home from './containers/Home/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CustomerAccess from './containers/CustomerAccess/CustomerAccess'
import Contact from './containers/Contact/Contact'
import Account from  './containers/Account/Account'

// Everything below will be deleted

function App() {
  return (

    <div className = {classes.app}>
      <Router>
        <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/contact" exact component = {Contact}/>
          <Route path = "/access/:type" exact component = {CustomerAccess}/>
          <Route path = "/account" exact component = {Account}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
