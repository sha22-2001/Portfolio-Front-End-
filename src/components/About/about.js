import React from 'react'
import './about.css'
import images from '../../assets/image/image'
import { ImFilePdf } from "react-icons/im";
import { LuDownload } from "react-icons/lu";
import { LiaLinkedin } from "react-icons/lia";
import { SlSocialGithub } from "react-icons/sl";
function about() {
  return (
    <div className='About'>
      <div className="background__colour profile__photo">
        <img src={images.profile__photo} alt="Profile Photo" />
        <div className="status">
          open for work
        </div>
      </div>
      <div className='heading'>
        <img src={images.star1} alt="" />
        <h1>Self - Summary</h1>
        <img src={images.star1} alt="" />
      </div>
      <div className="background__colour overflow__scroll self__summary">
        <img src={images.star2} className='star__background'/>
        <h1>Shayan Hore</h1>
        <p>I'm a passionate software developer with a knack for building projects and a strong interest in machine learning and computer vision. With expertise in MERN stack development and C++ DSA, I’m always seeking innovative solutions and opportunities to apply my skills in research and engineering</p>
      </div>
      <div className="background__colour overflow__scroll skills">
        <img src={images.star2} className='star__background'/>
        <h1>SKILLS</h1>
        <div className="skills__tecnology">

          <div>
            <img src={images.mongodb} alt="M" />
            <p>Mongo DB</p>
          </div>
          <div>
            <img src={images.express} alt="M" />
            <p>Express</p>
          </div>
          <div>
            <img src={images.react} alt="M" />
            <p>React</p>
          </div>
          <div>
            <img src={images.nodejs} alt="M" />
            <p>Node js</p>
          </div>
          <div>
            <img src={images.cpp} alt="M" />
            <p>c++</p>
          </div>
        </div>
      </div>
      <div className="background__colour overflow__scroll education">
        <img src={images.star2} className='star__background'/>
        <h1>EDUCATION</h1>
        <div>
          <p className="year">2007 - 2017</p>
          <h3 className="organistion">Framer Designer & Developer</h3>
          <p className="designation">Bluebase Designs</p>
        </div>
      </div>
      <div className="background__colour social__media">
        <div className='socila1'>
          <LiaLinkedin size={150} className='Linkedin'/>
          <p>@shayan</p>
        </div>
        
      </div>
      <div className="background__colour connect">
        <img src={images.star2} className='star__background'/>
        <h1>Let's <br/><span>Connect.</span></h1>
        <button>&rarr;</button>
      </div>
      <div className="background__colour Resume">
        <ImFilePdf size={100} className='pdf_icon'/>
        <button> <LuDownload size={20} color='white'/>Resume</button>
      </div>

    </div>
  )
}

export default about
