import React, { useState } from 'react';
import './works.css';
import { AiFillGithub } from "react-icons/ai";
import { urlFor } from '../../utility/imageUrl';
import useProject from "../../Hooks/useProject";
import useSocialLinks from "../../Hooks/useSocialLinks";


function Works() {
  const [url, setUrl] = useState('');

  const handleButtonClick = (newUrl) => {
    // Check if the URL is a shortened YouTube link
    const youtubeRegex = /https?:\/\/(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/;
    const match = newUrl.match(youtubeRegex);
  
    if (match) {
      const videoId = match[1]; // Extract the video ID
      setUrl(`https://www.youtube.com/embed/${videoId}`); // Set the embed URL
    } else {
      setUrl(newUrl); // Use the original URL for non-YouTube links
    }
  };
  

  const githubclick = () => {
    window.open(social.github, '_blank');
  }; 

  const { data: projectdata, loading: projectLoading, error: projectError } = useProject();
  const { data: socialLinks, loading: socialLoading, error: socialError } = useSocialLinks();

  const social = socialLinks[0] || {};

  return (
    <div className='Works'>
      <div className="heading">Project</div>
      
      {projectdata.map((project, index) => (
        <div key={index} className="project__option">
          <div>
            <h1>{project.title}</h1>
            <div className="tecnology">
              {project.technologies.map((tech, i) => (
                tech.image && (
                  <img
                    key={i}
                    src={urlFor(tech.image).url()} // Use urlFor to get the image URL
                    alt={tech.name}
                  />
                )
              ))}
            </div>
          </div>
          {project.mediaType === 'website' && (
            <button onClick={() => handleButtonClick(project.websiteUrl)}>&rarr;</button>
          )}
          {project.mediaType === 'video' && (
            <button onClick={() => handleButtonClick(project.videoUrl)}>&rarr;</button>
          )}
        </div>
      ))}
      
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
