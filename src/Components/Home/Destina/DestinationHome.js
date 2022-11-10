import React from "react";
import AllItem from "../../Destinations/AllItem";
import '../../Destinations/Destinations.css';
const DestinationHome = () => {
  return (
    <>
      <section className='popular top'>
        <div className='full_container'>
          <div className='heading'>
            <h1>Most Popular Destination</h1>
            <div className='line'></div>
          </div>

          <div className='destinaimghome'>
            <AllItem />
          </div>
        </div>
      </section>
    </>
  )
}

export default DestinationHome