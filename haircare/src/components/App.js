import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import NewAccountForm from './NewAccountForm';
import './App.css';
import Stylist from './Stylist';
// import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/protectedstylists">Stylists</Link>
            </li> 
            {/* <li>
              <Link to="/addnewpost">Create New Post</Link>
            </li> */}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/newaccount">Sign Up</Link>
            </li>
          </ul>
          <Route path="/login" component={LoginForm} />
          <Route path="/newaccount" component={NewAccountForm} />
          <Route exact path="/protectedstylists" component={Stylist} />
        </div>
      </Router>
  );
}

export default App;
