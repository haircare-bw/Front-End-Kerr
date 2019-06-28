import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';
import { getStylistId } from '../../actions';
import { MDBBtn } from "mdbreact";
// import LightBox from './LightBox';
import './stylist.css';

class StylistPage extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    // console.log('COMPONENT!!', id)
    this.props.getStylistId(id);
  }

  pushToStylist = (e) => {
    e.preventDefault();
    this.props.history.push('/stylists')
    }

  render() {
    const { stylist } = this.props.stylistPerson;
    return(
      <div>
        {stylist === undefined ? (
          <Loader type="Puff" color="#ffb900" height="60" width="60" />
        ) : (
          <div>
            <h1>
              <span>{stylist.username}'s</span> P O R T F O L I O{" "}
            </h1>

            <div className="portfolio-container">
              <img
                src={stylist.profile_img}
                alt={stylist.username}
                className="portfolio-img"
              />
              <span> {stylist.skills} </span>
            </div>

            {stylist.posts.map(post => {
              return (
                <div key={post.id}>
                  <h2>{post.title}</h2>
                  <img src={post.posts_image} alt={post.username} />
                  <p>{post.description}</p>
                </div>
              );
            })}
            <MDBBtn color="amber" onClick={this.pushToStylist}>Back</MDBBtn>
          </div>
        )}
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
  { getStylistId }
)(StylistPage)
);

//https://source.unsplash.com/collection/391411