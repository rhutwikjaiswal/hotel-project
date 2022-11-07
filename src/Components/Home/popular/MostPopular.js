import React from "react"
import Cards from "./Cards"
import "./MostPopular.css"
import SimpleSlider from "./SliderSlick"

const MostPopular = () => {
  return (
    <>
      <section className='popular top'>
        <div className='full_container'>
          <div className='heading'>
            <h1>Most Popular Hotel</h1>
            <div className='line'></div>
          </div>

          <div className='content'>
            <Cards />
            <SimpleSlider/>
          </div>
        </div>
      </section>
    </>
  )
}

export default MostPopular