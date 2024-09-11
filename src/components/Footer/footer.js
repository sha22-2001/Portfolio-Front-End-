import React from 'react'
import './footer.css'
import images from '../../assets/image/image'
function footer() {
  return (
    <div className='footer'>
        <div className='Logo'>
            <img src={images.logo} alt="" />
        </div>
      <p>&copy; Made on MERN</p>
    </div>
  )
}

export default footer
