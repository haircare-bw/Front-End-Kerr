import React from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from './Home';
import LoginForm from './forms/LoginForm';
import NewAccountForm from './forms/NewAccountForm';
import Stylist from './clientview/Stylist';
import StylistPage from './clientview/StylistPage';
import Profile from './stylistview/Profile';
import AddPostForm from './forms/AddPostForm';
// import PrivateRouteClient from './privateroute/PrivateRouteClient';
// import PrivateRouteStylist from './privateroute/PrivateRouteStylist';
import { MDBBtn } from "mdbreact";

class Navigation extends React.Component {
  render() {
    return (
          <div>
            <ul>
            <li>
                <Link to="/">Home</Link>
              </li> 
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
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginForm} />
            <Route path="/newaccount" component={NewAccountForm} />
            <Route exact path="/stylists" component={Stylist} />
            <Route exact path="/stylistpage/:id" component={StylistPage} />  
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/addnewpost" component={AddPostForm} />          
          </div>
    );
  }
  logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    this.props.history.push('/login');
  };

}

export default withRouter(Navigation);
