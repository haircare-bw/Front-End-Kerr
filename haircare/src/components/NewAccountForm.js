import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { newAccount } from '../actions';
import { 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBInput,
  MDBBtn, 
  MDBCard, 
  MDBCardBody,
  // MDBFileInput, 
} from 'mdbreact';

class NewAccountForm extends React.Component {
  state = {
    stylists: {
      username: '',
      // email: '',
      password: '',
      // about: '',
      // image: '',
    }
  }

  handleChange = e => {
    this.setState({
      stylists: {
        ...this.state.stylists,
        [e.target.name]: e.target.value
      }
    })
  }

  addNewAccount = e => {
    e.preventDefault();
    this.props.newAccount(this.state.stylists)
    this.setState({
      username: '',
      // email: '',
      password: '',
      // about: '',
      // image: '',
    })
  }

  render() {
    return(
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={this.addNewAccount}>
                  <p className="h4 text-center py-4">Let's create your account</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Name"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                    {/* <MDBInput
                      label="Email"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    /> */}
                    <MDBInput
                      label="Password"
                      group
                      type="password"
                      validate
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                    {/* <MDBInput
                      type="textarea"
                      label="Tell us about yourself"
                      rows="2"
                      name="about"
                      value={this.state.about}
                      onChange={this.handleChange}
                    /> */}
                    {/* <MDBFileInput 
                    label="Upload profile photo"
                    /> */}
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="cyan" type="submit">
                        {this.props.addingStylists ? (
                          <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />) 
                            : ('Signup')}
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
  addingStylists: state.loginReducer.addingStylists
});

export default connect (
  mapStateToProps,
  { newAccount }
) (NewAccountForm);