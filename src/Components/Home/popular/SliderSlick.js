import React, { Component } from "react";
import Slider from "react-slick";
import './SliderSlick.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="imagesSlider">
        <Slider {...settings}>
          <div>
        <span> <img src='./img/popular1.jpg' alt='err'/><h2>hi there</h2></span> 
          </div>
          <div>
          <img src='./img/popular2.jpg' alt='err' />
          </div>
          <div>
          <img src='./img/popular3.jpg' alt='err' />
          </div>
          <div>
          <img src='./img/popular4.jpg' alt='err' />
          </div>
          <div>
          <img src='./img/popular5.jpg' alt='err' />
          </div>
        </Slider>
      </div>
    );
  }
}