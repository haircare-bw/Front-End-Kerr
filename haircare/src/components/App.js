import React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import LoginForm from './LoginForm';
import NewAccountForm from './NewAccountForm';
import './App.css';
import Stylist from './Stylist';
import Profile from './Profile';
import StylistPage from './StylistPage';
import PrivateRouteClient from './PrivateRouteClient';
import PrivateRouteStylist from './PrivateRouteStylist';

class App extends React.Component {
  render() {
    return (
          <div className="App">
            <ul>
              <li>
                <Link to="/protected">Stylists</Link>
              </li> 
              <li>
                <Link to="/profile">Profile Page</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/newaccount">Sign Up</Link>
              </li>
              <li>
              <button onClick={this.logout}>logout</button>
              </li>
            </ul>
            <Route path="/login" component={LoginForm} />
            <Route path="/newaccount" component={NewAccountForm} />
            <PrivateRouteClient exact path="/protected" component={Stylist} /> 
            <PrivateRouteStylist exact path="/profile" component={Profile} />
            <PrivateRouteClient exact path="/stylist" component={StylistPage} /> 
          </div>
    );
  }
  logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    this.props.history.push('/login');
  };

}

export default withRouter(App);
