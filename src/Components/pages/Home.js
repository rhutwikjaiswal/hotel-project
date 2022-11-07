import React from 'react';
import Hero from '../Home/Hero';
import HomeAbout from "../Home/HomeAbout";
import DestinationHome from '../Home/Destina/DestinationHome';
import MostPopular from '../Home/popular/MostPopular';

const Home = () => {
  return (
    <div>
   <Hero/>
   <HomeAbout/> 
   <MostPopular/>
   <DestinationHome/>

    </div>
  )
}

export default Home
