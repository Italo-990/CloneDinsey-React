import React from 'react'
import Data from "./Data"
import "./RowOriginals.css"
function RowOriginals() {
  return (
    <div className='row-container-originails'>
        {  Data.map ( ( { rowimg, id, video } ) => {
            return (
                    <div key={id} className='row-cards-originails'> 
                        <img src={rowimg} className='img-cards-originails'></img>
                        <video className="hover-image-video" autoPlay loop playsInline>
                            <source src={video} type="video/mp4"/>
                        </video>
                     </div>
                    )
        }) 
        }
    </div>
  )
}

export default RowOriginals