//delete btn here with the deletePost();
import React from 'react';
import { updateProfile } from '../../actions';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";

class UpdateForm extends React.Component {
  state ={
    profiles: this.props.profiles
  }

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      profiles: {
        ...prevState.profiles,
        [e.target.name]: e.target.value
      }
    }))
  }

  render() {
    console.log('PROPS IN UPDATE FORM: ', this.props)
    return(
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={this.addNewPost}>
                  <p className="h4 text-center py-4">
                    Let's Update your Portfolio!
                  </p>
                  <div className="grey-text">
                    <MDBInput
                      label="Title"
                      group
                      type="text"
                      validate
                      name="title"
                      // value={}
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Image Url"
                      group
                      type="text"
                      validate
                      name="posts_image"
                      // value={}
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label="Description"
                      group
                      type="text"
                      validate
                      name="description"
                      // value={}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn color="amber" type="submit">
                      {this.props.updatingPost ? (
                        <Loader
                          type="ThreeDots"
                          color="#ffffff"
                          height="12"
                          width="26"
                        />
                      ) : (
                        "Update Profile"
                      )}
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

const mapStateToProps = state => ({
  error: state.profileReducer.error,
  updatingPost: state.profileReducer.updatingPost,
  activePost: state.profileReducer.activePost
});

export default connect(
  mapStateToProps, 
  { updateProfile }
  )(UpdateForm);
