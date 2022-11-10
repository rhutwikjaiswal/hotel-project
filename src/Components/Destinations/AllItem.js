import React, { useState } from "react"
import Dcard from "./Dcard"
import "../Gallery/Gallery.css"
import "./Destinations.css"
import Sdata from "./Sdata"

const AllItem = () => {
  const [items] = useState(Sdata)
  return (
    <>
      <section className='gallery desi '>
        <div className='container'>
          <div className='content destinaimg'>
            {items.map((item) => {
              return <Dcard key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllItem