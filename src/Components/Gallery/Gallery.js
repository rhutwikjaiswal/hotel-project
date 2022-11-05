import React from 'react'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import Cards from './Cards';
import GalleryData from './GalleryData';
import './Gallery.css';
const Gallery = () => {
  return (
    <>
      <HeadTitle/>
      <section className="gallery top">
        <div className="container grid">
            {GalleryData.map((value)=>{
                    return <Cards images={value.img} title={value.title} />
                })
            }
       
        </div>
      </section>
    </>
  )
}

export default Gallery;
