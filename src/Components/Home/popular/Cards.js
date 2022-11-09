import React from "react"
import PopularData from "./PopData"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}

const Cards = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  }
  return (
    <>
      <Slider {...settings}>
        {PopularData.map((value) => {
          return (
            <>
              <div className='cards'>
                <div className='item'>
                  <div className='imgae'>
                    <img src={value.image} alt='' />
                  </div>
                  <div className='rate'>
                    <i className='fa fa-star' style={{color:"#FFA500"}}></i>
                    <i className='fa fa-star'  style={{color:"#FFA500"}}></i>
                    <i className='fa fa-star' style={{color:"#FFA500"}}></i>
                    <i className='far fa-star' style={{color:"#FFA500"}}></i>
                    <i className='far fa-star' style={{color:"#FFA500"}}></i>
                  </div>
                  <div className='details'>
                    <h2>{value.name}</h2>
                    <div className='boarder'></div>
                    <h3>
                      {value.price} / <span>Per night</span>
                    </h3>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Cards