import React, { useState } from 'react';
import './works.css';
import images from '../../assets/image/image'
import { AiFillGithub } from "react-icons/ai";
// Example YouTube video URLs
const video1 = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Replace with actual URL
const video2 = 'https://www.youtube.com/embed/3JZ_D3ELwOQ'; // Replace with actual URL

function Works() {
  const [url, setUrl] = useState('');

  const handleButtonClick = (newUrl) => {
    setUrl(newUrl);
  };
  const githubclick = () => {
    window.location.href = 'https://github.com/sha22-2001'; // Replace with your LinkedIn profile URL
  };

  return (
    <div className='Works'>
      <div className="heading">Project</div>
      
      <div className="project__option project1">
        <div>
          <h1>Portfolio</h1>
          <div className="tecnology">
            <img src={images.mongodb} alt="*" />
            <img src={images.express} alt="*" />
            <img src={images.react} alt="*" />
            <img src={images.nodejs} alt="*" />
          </div>
        </div>
        <button onClick={() => handleButtonClick('https://shayan-code-since-2001.netlify.app/')}>&rarr;</button>
      </div>

      <div className="project__option project2">
        <div>
          <h1>Simon Game</h1>
          <div className="tecnology">
              <img src={images.html} alt="*" />
              <img src={images.css} alt="*" />
              <img src={images.js} alt="*" />
          </div>
        </div>
        <button onClick={() => handleButtonClick('https://simon2207.netlify.app/')}>&rarr;</button>
      </div>

      <div className="project__option project3">
        <div>
          <h1>Snake Game</h1>
          <div className="tecnology">
              <img src={images.html} alt="*" />
              <img src={images.css} alt="*" />
              <img src={images.js} alt="*" />
          </div>
        </div>
        <button onClick={() => handleButtonClick('https://sha22-2001.github.io/snake.github.io/')}>&rarr;</button>
      </div>

      <div className="project__option project4">
        <div>
          <h1>wild Life Detection</h1>
          <div className="tecnology">
              <img src={images.flask} alt="*" />
              <img src={images.python} alt="*" />
              <img src={images.js} alt="*" />
              <img src={images.roboflow} alt="*" />
              <img src={images.yolo} alt="*" />
          </div>
        </div>
        <button onClick={() => handleButtonClick(video1)}>&rarr;</button>
      </div>
      <div className="project__option project5">
        <div>
          <h1>Fog Computing</h1>
          <div className="tecnology">
              <img src={images.panda} alt="*" />
              <img src={images.s3} alt="*" />
              <img src={images.python} alt="*" />
          </div>
        </div>
        <button onClick={() => handleButtonClick(video2)}>&rarr;</button>
      </div>
      <div className="display">
        {url && (
          <iframe 
            src={url} 
            style={{ width: '100%', height: '100%', border: 'none' }} 
            title="Embedded Content" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        )}
      </div>
      <div className="github__source__code">
        <AiFillGithub size={70} className='github_icon' style={{ cursor: 'pointer' }} onClick={githubclick}/>
        <p>Project Source code</p>
      </div>
    </div>
  );
}

export default Works;
