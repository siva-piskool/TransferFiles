import React, { Component } from "react";
import "./Modal.css";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.onClickForward = this.onClickForward.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
    this.state = {
      currentIndex: null,
      model: [
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
      ],
      images: [
        {
          img: "01"
        },
        {
          img: "02"
        },
        {
          img: "03"
        },
        {
          img: "04"
        },
        {
          img: "05"
        },
        {
          img: "06"
        },
        {
          img: "07"
        },
        {
          img: "08"
        },
        {
          img: "09"
        },
        {
          img: "10"
        },
        {
          img: "11"
        },
        {
          img: "12"
        },
        {
          img: "13"
        },
        {
          img: "14"
        },
        {
          img: "15"
        },
        {
          img: "16"
        },
        {
          img: "17"
        },
        {
          img: "18"
        },
        {
          img: "19"
        },
        {
          img: "20"
        },
        {
          img: "21"
        },
        {
          img: "22"
        },
        {
          img: "23"
        },
        {
          img: "24"
        },
        {
          img: "25"
        },
        {
          img: "26"
        },
        {
          img: "27"
        },
        {
          img: "28"
        },
        {
          img: "29"
        },
        {
          img: "30"
        },
        {
          img: "31"
        },
        {
          img: "32"
        },
        {
          img: "33"
        },
        {
          img: "34"
        },
        {
          img: "35"
        },
        {
          img: "36"
        },
        {
          img: "37"
        },
        {
          img: "38"
        },
        {
          img: "39"
        },
        {
          img: "40"
        },
        {
          img: "41"
        },
        {
          img: "42"
        },
        {
          img: "43"
        },
        {
          img: "44"
        },
        {
          img: "45"
        },
        {
          img: "46"
        },
        {
          img: "47"
        },
        {
          img: "48"
        },
        {
          img: "49"
        },
        {
          img: "50"
        }
      ],
      captions: [
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
    };
  }
  openModal(e, index) {
    this.setState({ currentIndex: index });
  }
  onClickForward() {
    if (this.state.currentIndex + 1 === this.state.model.length) {
      this.setState({
        currentIndex: 0
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
  }
  onClickBack() {
    if (this.state.currentIndex - 1 === -1) {
      this.setState({
        currentIndex: this.state.model.length - 1
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
  }
  render() {
    const images = this.state.images.map((data, index) => {
      return (
        <div
          className="col-md-3 image-border py-2"
          onClick={e => this.openModal(e, index)}
        >
          <img
            src={require(`../images/gallery/PC_pic_${data.img}.jpg`)}
            className="img-fluid"
            data-toggle="modal"
            data-target="#myModal"
          />
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{images}</div>
        <div className="modal" id="myModal">
          <div className="modal-dialog modal-dialog-centered">
           <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">
                  {this.state.captions[this.state.currentIndex]}
                </h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <img
                  src={this.state.model[this.state.currentIndex]}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="modal-footer d-flex">
                <button onClick={this.onClickBack}>Prev</button>
                <button onClick={this.onClickForward}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
