import React from 'react';
import { withRouter } from 'react-router';

class StylistList extends React.Component {
  
  //remove testId and pass in actual id from api with no colon!!!
  pushToStylistPage = (id) => {
    let TestId=1
    console.log(id)
      this.props.history.push(`/stylists/${TestId}`)
    }

  render() {
    console.log(this.props);
    return(
      <div>
          <h3>{this.props.stylist.username}</h3>
          <p>{this.props.stylist.about}</p>
          <p>Skills: {this.props.stylist.skills}</p>
          <button onClick={this.pushToStylistPage}>View Profile</button>
      </div>
    )
  }
}

export default withRouter (StylistList);

//render & style stylists data here from Style component
//use Card decks from MDB to style
