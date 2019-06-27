import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';
import { getStylistId } from '../../actions';
import LightBox from './LightBox';
import './stylist.css';

class StylistPage extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log('COMPONENT!!', id)
    this.props.getStylistId(id);
  }

  render() {
    return(
      <div>
        {this.props.fetchingStylists && ( 
            <Loader type="Puff" color="#ffb900" height="60" width="60" />
        )}
        <h1><span>{this.props.stylistPerson.username}'s</span> P O R T F O L I O </h1>
        
                  { <div className="portfolio-container"> 
                      <img
                        // src={this.props.stylistPerson.profilePhoto}
                        src={this.props.stylistPerson.profile_img}
                        alt={this.props.stylistPerson.name}
                        className="portfolio-img"
                      />
                      <p> {this.props.stylistPerson.about} </p> <br />
                      <span> {this.props.stylistPerson.skills} </span>
                  </div> }
                  {this.props.stylistPerson.portfolio_img}
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
  { getStylistId }
)(StylistPage)
);

//https://source.unsplash.com/collection/391411