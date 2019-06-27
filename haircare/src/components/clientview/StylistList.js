import React from 'react';
import { withRouter } from 'react-router';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer } from 'mdbreact';
import './stylist.css';

class StylistList extends React.Component {
  state ={
    liked: false,
    dislike: false
  }
  
  //remove testId and pass in actual id from api with no colon!!!
  pushToStylistPage = (id) => {
    let TestId = 2
    // console.log(id)
      this.props.history.push(`/stylistpage/${TestId}`)
    }

    //thumbs up toggle
    toggleLike =() => {
      this.setState({
        liked: !this.state.liked
      })
    }

    //thumbs down toggle
    toggleDislike = () => {
      this.setState({
        dislike: !this.state.dislike
      })
    }

  render() {
    //console.log(this.props);
    return(
      <div>
        <MDBContainer>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src="https://source.unsplash.com/collection/391411" waves />
            <div id="post-icons">
              {this.state.liked ? 
                <i onClick={this.toggleLike} className="fas fa-thumbs-up"></i> 
                  : <i onClick={this.toggleLike} className="far fa-thumbs-up"></i> }
              {this.state.dislike ? 
                <i onClick={this.toggleDislike} className="fas fa-thumbs-down"></i> 
                  : <i onClick={this.toggleDislike} className="far fa-thumbs-down"></i> }
            </div>
            <MDBCardBody>
              <MDBCardTitle>{this.props.stylist.username}</MDBCardTitle>
              <MDBCardText>{this.props.stylist.about}</MDBCardText>
              <MDBCardText>Top skills: {this.props.stylist.skills}</MDBCardText>
              <MDBBtn color="amber" onClick={this.pushToStylistPage(this.props.stylist.id)}>View Profile</MDBBtn>
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


//src={this.props.stylist.profile_img}