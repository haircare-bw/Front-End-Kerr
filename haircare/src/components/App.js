import React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import LoginForm from './forms/LoginForm';
import NewAccountForm from './forms/NewAccountForm';
import './App.css';
import Stylist from './clientview/Stylist';
import StylistPage from './clientview/StylistPage';
import Profile from './stylistview/Profile';
import AddPostForm from './forms/AddPostForm';
import PrivateRouteClient from './privateroute/PrivateRouteClient';
import PrivateRouteStylist from './privateroute/PrivateRouteStylist';
import { MDBBtn } from "mdbreact";

class App extends React.Component {
  render() {
    return (
          <div className="App">
            <ul>
              <li>
                <Link to="/stylists">Stylists</Link>
              </li> 
              <li>
                <Link to="/profile">Profile Page</Link>
              </li>
              <li>
                <Link to="/addnewpost">New Post Form</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/newaccount">Sign Up</Link>
              </li>
              <li>
              <MDBBtn flat onClick={this.logout}>logout</MDBBtn>
              </li>
            </ul>
            <Route path="/login" component={LoginForm} />
            <Route path="/newaccount" component={NewAccountForm} />
            <PrivateRouteClient exact path="/stylists" component={Stylist} />
            <PrivateRouteClient exact path="/stylists/:id" component={StylistPage} />  
            <PrivateRouteStylist exact path="/profile" component={Profile} />
            <PrivateRouteStylist exact path="/addnewpost" component={AddPostForm} />          
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
