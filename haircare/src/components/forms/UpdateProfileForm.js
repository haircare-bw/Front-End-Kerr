//delete btn here with the deletePost();
import React from 'react';
import { updateProfile, deletePost } from '../../actions';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

class UpdateProfileForm extends React.Component {
  state ={
    profiles: this.props.profiles
  }

  //function for the input
  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      profiles: {
        ...prevState.profiles,
        [e.target.name]: e.target.value
      }
    }))
  }


  handleDelete = e => {
    e.preventDefault();
    this.props.deletePost(this.state.profile.post)
    this.props.history.push('/users')
  }

  //function to pass into 'UPDATE PROFILE' FORM which will update profile with info entered then route back to page
  handleProfileUpdate = e => {
    e.preventDefault();
    this.props.updateProfile(this.state.profile)
    this.props.history.push('/users')
  }

  render() {
    console.log('PROPS IN UPDATE FORM: ', this.props)
    return(
      <div>
        <h2>Update Your Profile</h2>
        <form onSubmit={this.handleProfileUpdate}>
          <input 
            type="text"
            name="name"
            placeholder="name"
            onChange={this.handleChange}
            value={this.props.profiles.name}
          />
        </form>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  error: state.profileReducer.error,
  updatingProfile: state.profileReducer.updatingProfile,
  deletingPost: state.profileReducer.deletingPost
});

export default connect(
  mapStateToProps, 
  { updateProfile }
  )(UpdateProfileForm);
