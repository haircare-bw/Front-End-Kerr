import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';
import { getStylistId } from '../actions';

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
            <Loader type="Puff" color="#204963" height="60" width="60" />
        )}
        <h1>IT works</h1>
{                    <div> 
                      <img
                        src={this.props.stylistPerson.profilePhoto}
                        alt={this.props.stylistPerson.name}
                      />
                      <p> {this.props.stylistPerson.username } </p>
                      <p> {this.props.stylistPerson.about} </p>
                      <p> {this.props.stylistPerson.skills} </p>
                  </div>
                }
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