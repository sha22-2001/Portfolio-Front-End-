import React from 'react'
import './header.css'
import images from '../../assets/image/image'
import './header.css'
import { Link } from 'react-router-dom';
function header() {
  return (
    <div className='header'>
        <div className='Logo'>
            <img src={images.logo} alt="" />
        </div>
        <div className='Option'>
          <Link to="/about">About</Link>
          <Link to="/works">Works</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className='lets__talk'>
          <button>Let's Connect</button>
        </div>
    </div>
  )
}
export default header
