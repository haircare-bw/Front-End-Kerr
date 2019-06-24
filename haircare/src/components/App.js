import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import NewAccountForm from './NewAccountForm';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li>  */}
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
          <Route exact path="/login" component={LoginForm} />
          <Route path="/newaccount" component={NewAccountForm} />
        </div>
      </Router>
  );
}

export default App;
