import React from "react";
import { withRouter } from 'react-router';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox.css";

class LightboxPage extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [
      'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(58).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(61).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(62).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(60).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(66).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(70).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(74).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(64).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(77).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(78).jpg',
      'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(76).jpg',
    ],
    colWidth: [3, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3]
  }

  renderImages = () => {
    let photoIndex = -1;
    const { images } = this.state;

    return images.map((imageSrc, index) => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md={this.state.colWidth[index]} key={photoIndex}>
          <figure>
            <img
              src={imageSrc}
              alt="Gallery"
              className="img-fluid z-depth-1"
              onClick={() =>
                this.setState({ photoIndex: privateKey, isOpen: true })
              }
            />
          </figure>
        </MDBCol>
      );
    })
  }

  //function to push back to the stylist page after viewing portfolio page
  pushToStylist = (e) => {
    e.preventDefault();
    this.props.history.push('/stylists')
    }

  render() {
    const { photoIndex, isOpen, images } = this.state;
    return (
      <MDBContainer className="mt-5 p-3" >
        <div className="mdb-lightbox p-3">
          <MDBRow>
            {this.renderImages()}
          </MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
        <MDBCol md="12" className="text-center py-4">
          <MDBBtn color="amber" onClick={this.pushToStylist}>Back</MDBBtn>
        </MDBCol>
      </MDBContainer >
    );
  }
}

export default withRouter (LightboxPage);