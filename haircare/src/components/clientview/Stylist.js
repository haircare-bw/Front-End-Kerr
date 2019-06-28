import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';
import { getStylists } from '../../actions';
import StylistList from './StylistList';
//map over stylists here from api

class Stylist extends React.Component {
  componentDidMount() {
    this.props.getStylists();
  }

  render() {
    return(
      <div>
        
        <h1>Stylists Near You</h1>
        {this.props.fetchingStylists && ( 
            <Loader type="Puff" color="#ffb900" height="60" width="60" />
        )}

        {this.props.stylists && (this.props.stylists.map(stylist => (
            <StylistList stylist={stylist} key={stylist.id} />
        )))}

        {this.props.error && <p>{this.props.error}</p>} 

      </div>
    )
  }
}

const mapStateToProps = state => ({
  stylists: state.stylistReducer.stylists,
  error: state.stylistReducer.error,
  fetchingStylists: state.stylistReducer.fetchingStylists,
  // stylistPerson: state.stylistReducer.stylistPerson
})

export default withRouter (
  connect(
  mapStateToProps,
  { getStylists }
)(Stylist)
);