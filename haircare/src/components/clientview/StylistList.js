import React from 'react';
import { withRouter } from 'react-router';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer } from 'mdbreact';


class StylistList extends React.Component {
  
  //remove testId and pass in actual id from api with no colon!!!
  pushToStylistPage = (id) => {
    let TestId=3
    console.log(id)
      this.props.history.push(`/stylists/${TestId}`)
    }

  render() {
    //console.log(this.props);
    return(
      <div>
        <MDBContainer>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src="https://source.unsplash.com/collection/391411" waves />
            <MDBCardBody>
              <MDBCardTitle>{this.props.stylist.username}</MDBCardTitle>
              <MDBCardText>{this.props.stylist.about}</MDBCardText>
              <MDBCardText>Top skills: {this.props.stylist.skills}</MDBCardText>
              <MDBBtn color="amber" onClick={this.pushToStylistPage}>View Profile</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
         <br/>
      </div>
    )
  }
}

export default withRouter (StylistList);

//render & style stylists data here from Style component
//use Card decks from MDB to style
