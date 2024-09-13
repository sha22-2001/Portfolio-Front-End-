import React from 'react'
import './about.css'
import images from '../../assets/image/image'
import { ImFilePdf } from "react-icons/im";
import { LuDownload } from "react-icons/lu";
import { LiaLinkedin } from "react-icons/lia";
import cv from '../../assets/pdf/cv.pdf'
function about() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cv; // Replace with the path to your PDF
    link.download = 'Shayan Hore(Resume).pdf'; // This is the name of the downloaded file
    link.click();
  };
  const handleClick = () => {
    window.location.href = 'https://www.linkedin.com/in/shayan-hore/'; // Replace with your LinkedIn profile URL
  };
  return (
    <div className='About'>
      <div className="background__colour profile__photo">
        <img src={images.profile__photo} alt='Profile Photo'/>
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
        <img src={images.star2} className='star__background' alt='*'/>
        <h1>Shayan Hore</h1>
        <p>I'm a CSE graduate with a specialization in Cloud Computing, skilled in full-stack development (MERN), YOLOv8, and cloud computing. I build responsive web apps, manage databases, and use version control to solve technical problems.</p>
      </div>
      <div className="background__colour overflow__scroll skills">
        <img src={images.star2} className='star__background' alt='*'/>
        <h1>SKILLS</h1>
        <div className="skills__tecnology">

          <div>
            <img src={images.mongodb} alt="M" />
            <p>Mongo DB</p>
          </div>
          <div>
            <img src={images.express} alt="E" />
            <p>Express</p>
          </div>
          <div>
            <img src={images.react} alt="R" />
            <p>React</p>
          </div>
          <div>
            <img src={images.nodejs} alt="N" />
            <p>Node js</p>
          </div>
          <div>
            <img src={images.cpp} alt="c++" />
            <p>c++</p>
          </div>
          <div>
            <img src={images.js} alt="js" />
            <p>js</p>
          </div>
          <div>
            <img src={images.python} alt="python" />
            <p>python</p>
          </div>
        </div>
      </div>
      <div className="background__colour overflow__scroll education">
        <img src={images.star2} className='star__background' alt='*'/>
        <h1>EDUCATION</h1>
        <div>
          <p className="year">2007 - 2017</p>
          <h3 className="organistion">Framer Designer & Developer</h3>
          <p className="designation">Bluebase Designs</p>
        </div>
      </div>
      <div className="background__colour social__media">
        <div className='socila1'>
          <LiaLinkedin size={150} className='Linkedin' onClick={handleClick}/>
          <p onClick={handleClick} style={{ cursor: 'pointer' }}>@shayan</p>
        </div>
        
      </div>
      <div className="background__colour connect">
        <img src={images.star2} className='star__background' alt='*'/>
        <h1>Let's <br/><span>Connect.</span></h1>
        <button>&rarr;</button>
      </div>
      <div className="background__colour Resume">
        <ImFilePdf size={100} className='pdf_icon' style={{ cursor: 'pointer' }} onClick={handleDownload}/>
        <button onClick={handleDownload}> <LuDownload size={20} color='white'/>Resume</button>
      </div>

    </div>
  )
}

export default about
