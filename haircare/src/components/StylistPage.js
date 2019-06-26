import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';
import { getStylistId } from '../actions';

class StylistPage extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getStylistId(id);
  }

  render() {
    return(
      <div>
        {this.props.fetchingStylists && ( 
            <Loader type="Puff" color="#204963" height="60" width="60" />
        )}

        {this.props.stylistPerson && (this.props.stylistPerson.map(person => (
                    <div 
                      key={person.id} 
                    >
                      <img
                        src={person.profilePhoto}
                        alt={person.name}
                      />
                      <p> {person.username } </p>
                      <p> {person.about} </p>
                      <p> {person.skills} </p>
                  </div>
                )))}
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