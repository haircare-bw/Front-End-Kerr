import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { addPost } from '../../actions';
import { 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBInput,
  MDBBtn, 
  MDBCard, 
  MDBCardBody,
} from 'mdbreact';


class AddPostForm extends React.Component {
  state= {
    posts: {
      image: '',
      description: ''
    }
  }

  handleChange = e => {
    this.setState({
      posts: {
        ...this.state.posts,
        [e.target.name]: e.target.value
      }
    })
  }
  
  //need a function to handle accepting the image upload

  addNewPost = e => {
    e.preventDefault();
    this.props.addPost(this.state.posts)
    this.props.history.push('/profile')
    this.setState({
      image: '',
      description: ''
    })
  }

  render() {
    return (
        <MDBContainer>
            <MDBRow>
              <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody>
                    <form onSubmit={this.addNewPost}>
                      <p className="h4 text-center py-4">Let's update your Portfolio!</p>
                      <div className="grey-text">
                        <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="inputGroupFileAddon01">
                                Upload
                              </span>
                            </div>
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01"
                                name="image"
                                value={this.state.image}
                                onChange={this.handleChange}
                              />
                              <label className="custom-file-label" htmlFor="inputGroupFile01">
                                Choose file
                              </label>
                            </div>
                          </div>
                        <MDBInput
                          label="Description"
                          group
                          type="text"
                          validate
                          name="descripton"
                          value={this.state.description}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="text-center py-4 mt-3">
                        <MDBBtn color="amber" type="submit">
                            {this.props.addingPost ? (
                              <Loader type="ThreeDots" color="#ffffff" height="12" width="26" />) 
                                : ('Update Profile')}
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
  addingPost: state.profileReducer.addingPost
});

export default connect(
  mapStateToProps, 
  { addPost }
  )(AddPostForm);

// //create form here for stylists to add new post to their portfolio
// //will need state, handleChange(), addNewPost(), import addPost() from actions
// //mapStateToProps here as well and connect()
// //use loader from react-loader-spinner
// //See Smurf Redux Sprint :)

// state = {
//   username: '',
//   profileImage: '',
//   about: '',
//   skills: '',
//   portfolio: ''
// }

//see trinkets api for code to addItem. addPost should be similar