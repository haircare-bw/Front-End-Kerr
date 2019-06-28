import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";
import { MDBBtn } from "mdbreact";
import {
  getStylistId,
  addPost,
  deletePost,
  updateActivePost
} from "../../actions";
// import LightBox from '../clientview/LightBox';
import "../clientview/stylist.css";

class ProfilePage extends React.Component {
  state = {
    posts: {},
    activePost: null
  };

  componentDidMount() {
    const id = localStorage.getItem("userId");
    // console.log('COMPONENT!!', id)
    this.props.getStylistId(id);
  }

  pushToAddPostForm = () => {
    this.props.history.push("/addnewpost");
  };

  pushToUpdateForm = post => {
    this.props.updateActivePost(post);
    this.props.history.push("/update-post");
  };

  // setUpdateForm = (e, post) => {
  //   e.preventDefault();
  //   this.setState({ activePost: post });
  //   this.props.history.push("/update-post");
  // };

  deleteOldPost = id => {
    this.props.deletePost(id);
  };

  render() {
    const { stylist } = this.props.stylistPerson;

    console.log("STYLIST PAGE PROPS: ", stylist);
    return (
      <div>
        <MDBBtn onClick={() => this.pushToAddPostForm()}>Add New Post</MDBBtn>
        {stylist === undefined ? (
          <Loader type="Puff" color="#ffb900" height="60" width="60" />
        ) : (
          <div>
            <h1>
              <span>{this.props.stylistPerson.stylist.username}'s</span> P O R T
              F O L I O{" "}
            </h1>

            <div className="portfolio-container">
              <img
                // src='https://source.unsplash.com/collection/391411'
                src={this.props.stylistPerson.stylist.profile_img}
                alt={this.props.stylistPerson.stylist.username}
                className="portfolio-img"
              />
              <span> {this.props.stylistPerson.stylist.skills} </span>
            </div>

            {stylist.posts.map(post => {
              return (
                <div key={post.id}>
                  <h2>{post.title}</h2>
                  <img src={post.posts_image} />
                  <p>{post.description}</p>
                  <MDBBtn
                    onClick={() => {
                      this.pushToUpdateForm(post);
                    }}
                  >
                    Update
                  </MDBBtn>
                  <MDBBtn
                    onClick={() => {
                      this.deleteOldPost(post.id);
                    }}
                  >
                    Delete
                  </MDBBtn>
                </div>
              );
            })}

            {/* <MDBBtn color="amber" onClick={() => this.pushToUpdateForm()}>
              UPDATE
            </MDBBtn> */}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stylistPerson: state.stylistReducer.stylistPerson,
  fetchingStylists: state.stylistReducer.fetchingStylists,
  deleteSuccessMessage: state.stylistReducer.deleteSuccessMessage,
  activePost: state.profileReducer.activePost
});

export default withRouter(
  connect(
    mapStateToProps,
    { getStylistId, addPost, deletePost, updateActivePost }
  )(ProfilePage)
);

//https://source.unsplash.com/collection/391411

/* this.props.fetchingStylists ?
        <Loader type="Puff" color="#ffb900" height="60" width="60" />

        */
