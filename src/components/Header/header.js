import React from 'react'
import './header.css'
import images from '../../assets/image/image'
import './header.css'
function header() {
  return (
    <div className='header'>
        <div className='Logo'>
            <img src={images.logo} alt="" />
        </div>
        <div className='Option'>
            <a href="#">About</a>
            <a href="#">Works</a>
            <a href="#">Contact</a>
        </div>
        <div className='lets__talk'>
          <button>Let's Connect</button>
        </div>
    </div>
  )
}
export default header
