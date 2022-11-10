import React from "react"


const Cards = ({ item: {image, title} }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={image} alt='err' />
        </div>
        <div className='title'>
          <h3>{title} </h3>
        </div>
      </div>
    </>
  )
}

export default Cards
