import React from 'react';
import Hero from '../Home/Hero';
import HomeAbout from "../Home/HomeAbout";
import DestinationHome from '../Home/Destina/DestinationHome';
import MostPopular from '../Home/popular/MostPopular';
import Initials from '../../Initials';
import Works from '../Home/Work/Works';


const Home = () => {
  return (
    <div>
   <Hero/>
   <HomeAbout/> 
   <MostPopular/>
   <DestinationHome/>
   <Works/>
   <Initials/>
    </div>
  )
}

export default Home
