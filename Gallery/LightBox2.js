import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./LightBox2.css";

const images = [
  require("../images/gallery/PC_pic_01.jpg"),
  require("../images/gallery/PC_pic_02.jpg"),
  require("../images/gallery/PC_pic_03.jpg"),
  require("../images/gallery/PC_pic_04.jpg"),
  require("../images/gallery/PC_pic_05.jpg"),
  require("../images/gallery/PC_pic_06.jpg"),
  require("../images/gallery/PC_pic_07.jpg"),
  require("../images/gallery/PC_pic_08.jpg"),
  require("../images/gallery/PC_pic_09.jpg"),
  require("../images/gallery/PC_pic_10.jpg"),
  require("../images/gallery/PC_pic_11.jpg"),
  require("../images/gallery/PC_pic_12.jpg"),
  require("../images/gallery/PC_pic_13.jpg"),
  require("../images/gallery/PC_pic_14.jpg"),
  require("../images/gallery/PC_pic_15.jpg"),
  require("../images/gallery/PC_pic_16.jpg"),
  require("../images/gallery/PC_pic_17.jpg"),
  require("../images/gallery/PC_pic_18.jpg"),
  require("../images/gallery/PC_pic_19.jpg"),
  require("../images/gallery/PC_pic_20.jpg"),
  require("../images/gallery/PC_pic_21.jpg"),
  require("../images/gallery/PC_pic_22.jpg"),
  require("../images/gallery/PC_pic_23.jpg"),
  require("../images/gallery/PC_pic_24.jpg"),
  require("../images/gallery/PC_pic_25.jpg"),
  require("../images/gallery/PC_pic_26.jpg"),
  require("../images/gallery/PC_pic_27.jpg"),
  require("../images/gallery/PC_pic_28.jpg"),
  require("../images/gallery/PC_pic_29.jpg"),
  require("../images/gallery/PC_pic_30.jpg"),
  require("../images/gallery/PC_pic_31.jpg"),
  require("../images/gallery/PC_pic_32.jpg"),
  require("../images/gallery/PC_pic_33.jpg"),
  require("../images/gallery/PC_pic_34.jpg"),
  require("../images/gallery/PC_pic_35.jpg"),
  require("../images/gallery/PC_pic_36.jpg"),
  require("../images/gallery/PC_pic_37.jpg"),
  require("../images/gallery/PC_pic_38.jpg"),
  require("../images/gallery/PC_pic_39.jpg"),
  require("../images/gallery/PC_pic_40.jpg"),
  require("../images/gallery/PC_pic_41.jpg"),
  require("../images/gallery/PC_pic_42.jpg"),
  require("../images/gallery/PC_pic_43.jpg"),
  require("../images/gallery/PC_pic_44.jpg"),
  require("../images/gallery/PC_pic_45.jpg"),
  require("../images/gallery/PC_pic_46.jpg"),
  require("../images/gallery/PC_pic_47.jpg"),
  require("../images/gallery/PC_pic_48.jpg"),
  require("../images/gallery/PC_pic_49.jpg"),
  require("../images/gallery/PC_pic_50.jpg")
];
const captions=[
  "Feature Stars of Pride International School.",
  "Pride of our succeded students.",
  "Creativity of students who make our brand stylish.",
  "Play @ Pride International School.",
  "Study that invovle reactions of passion.",
  "Traditional art of 'Tholu Bommalata' craft made by our students.",
  "Achievers @ Pride International School.",
  "Achievers @ Pride International School.",
  "Wood Craft @ Pride International School.",
  "Electronics @ Pride International School.",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
  "Twenty",
  "Twenty One",
  "Twenty Two",
  "Twenty Three",
  "Twenty Four",
  "Twenty Five",
  "Twenty Six",
  "Twenty Seven",
  "Twenty Eight",
  "Twenty Nine",
  "Thirty",
  "Thirty One",
  "Thirty Two",
  "Thirty Three",
  "Thirty Four",
  "Thirty Five",
  "Thirty Six",
  "Thirty Seven",
  "Thirty Eight",
  "Thirty Nine",
  "Forty",
  "Forty One",
  "Forty Two",
  "Forty Three",
  "Forty Four",
  "Forty Five",
  "Forty Six",
  "Forty Seven",
  "Forty Eight",
  "Forty Nine",
  "Fifty"
 
]
class LightBox2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      ImageGallery: []
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:3001/gallery")
      .then(response => response.json())
      .then(res => this.setState({ ImageGallery: res.gallery }));
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div className="myModal">
        <div className="row">
          {this.state.ImageGallery.map((imageData, index) => {
            return (
              <div
                className="col-md-3 col-sm-6 col-12 mb-4 image-border"
                key={imageData.image}
              >
                <div className="pointer">
                  <img
                    className="img-fluid"
                    src={require(`../images/gallery/${imageData.image}.jpg`)}
                    alt={imageData.alt}
                    onClick={() =>
                      this.setState({
                        photoIndex: `${imageData.photoIndex}`,
                        isOpen: true
                      })
                    }   
                  />
                </div>
              </div>
            );
          })}
        </div>
        {isOpen && (
          <Lightbox
            imageTitle={captions[photoIndex]}
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
               
              })
            }
          />
        )}
      </div>
    );
  }
}

export default LightBox2;
