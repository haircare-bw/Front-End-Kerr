import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';
import { MDBBtn } from "mdbreact";
import { getStylistId, addPost } from '../../actions';
// import LightBox from '../clientview/LightBox';
import '../clientview/stylist.css';

class ProfilePage extends React.Component {
  state ={
    posts: {},
    activePost: null
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    // console.log('COMPONENT!!', id)
    this.props.getStylistId(id);
  }

  addNewPost = post => {
    axios
    .post('/users', post)
    .then(res => {
      this.setState({ posts: res.data })
      this.props.history.push(`/profile`)
    })
    .catch(err => console.log(err))
  }

  setUpdateForm = (e, post) => {
    e.preventDefault();
    this.setState({ activePost: post })
    this.props.history.push('/update-form')
  }

  updatePost = (id,post) => {
   axios
   .put(`/users/${id}`, post)
   .then(res => {
     this.setState({ posts: res.data })
     this.props.history.push(`/profile`)
   })
   .catch(err => console.log(err))
  }

  deletePost = (id, post) => {
    axios
      .put(`/users/${id}`, post)
      .then(res => {
        this.setState({ posts: res.data })
        this.props.history.push(`/profile`)
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
        {this.props.fetchingStylists && ( 
            <Loader type="Puff" color="#ffb900" height="60" width="60" />
        )}
        <h1><span>{this.props.stylistPerson.stylist.username}'s</span> P O R T F O L I O </h1>
        
                  { <div className="portfolio-container"> 
                      <img
                        // src='https://source.unsplash.com/collection/391411'
                        src={this.props.stylistPerson.stylist.profile_img}
                        alt={this.props.stylistPerson.stylist.username}
                        className="portfolio-img"
                      />
                      <span> {this.props.stylistPerson.stylist.skills} </span>
                  </div> }
                  {this.props.stylistPerson.stylist.posts}
                  <MDBBtn color="amber" onClick={this.setUpdateForm}>UPDATE</MDBBtn>
                {/* <LightBox /> */}
      </div>
    )
  }
}


const mapStateToProps = state => ({
  stylistPerson: state.stylistReducer.stylistPerson,
  fetchingStylists: state.stylistReducer.fetchingStylists
})

export default withRouter (
  connect(
  mapStateToProps,
  { getStylistId, addPost }
)(ProfilePage)
);

//https://source.unsplash.com/collection/391411