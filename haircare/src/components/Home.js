import React from 'react';
import { MDBBtn } from 'mdbreact';

class Home extends React.Component {

  routeToLogin = e => {
    e.preventDefault();
    this.props.history.push('/login')
  }

  render() {
    return(
      <div className="home-wrapper">
        <img 
          src="https://source.unsplash.com/featured/3000x1000/?hair,salon"
          alt="beauty shop"
          className="home-image"
        />
        <MDBBtn onClick={this.routeToLogin} color="amber" type="submit">
          LOGIN
        </MDBBtn>
      </div>
    )
  }
}

export default Home;

//// className="btn login-btn"