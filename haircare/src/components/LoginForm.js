import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { login } from '../actions';
import { 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBInput,
  MDBBtn, 
  MDBCard, 
  MDBCardBody 
} from 'mdbreact';

class LoginForm extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  loginChange = e => {
    e.preventDefault();
    this.props.login(this.state.credentials)
    .then(res => {
      if (res) {
        this.props.history.push('/protected')
      }
    })
  }

  render() {
    return (
    <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={this.loginChange}>
                  <p className="h4 text-center py-4">Sign in to Your Account</p>
                  <div className="grey-text">
                    <MDBInput
                      group
                      label="Username"
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="username"
                      value={this.state.credentials.username}
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Password"
                      group
                      type="password"
                      validate
                      name="password"
                      value={this.state.credentials.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="cyan" type="submit">
                        {this.props.loggingIn ? (
                          <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />) 
                            : ('Login')}
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
    </MDBContainer>
    )
  }
}

//import state from loginReducer & connect to component
const mapStateToProps = state => ({
  error: state.loginReducer.error,
  loggingIn: state.loginReducer.loggingIn
});

export default connect (
  mapStateToProps,
  { login }
) (LoginForm);


