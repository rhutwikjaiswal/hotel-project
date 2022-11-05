import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h1>
            We <span>provide Solution</span> to grow your business
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
          <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row image'>
          <img src='/img/about1.jpg' alt='' />
        </div>
      </div>
    </>
  )
}

export default AboutCard