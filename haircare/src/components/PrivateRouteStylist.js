import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRouteStylist = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          return <Component {...props} />;
        } 
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRouteStylist;

//check if person logged in is a client or user and save on local storage - conditional rendering
//(localStorage.getItem('token') && localStorage.getItem('userType') === 'stylist')