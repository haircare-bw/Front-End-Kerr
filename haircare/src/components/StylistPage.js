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
          <h3>{props.stylistPerson.username}</h3>
          <p>{props.stylistPerson.about}</p>
          <p>Skills: {props.stylistPerson.skills}</p>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  stylistPerson: state.stylistReducer.stylistPerson
})

export default withRouter (
  connect(
  mapStateToProps,
  { getStylistId }
)(StylistPage)
);