import React from 'react'
import './about.css'
import images from '../../assets/image/image'
import { ImFilePdf } from "react-icons/im";
import { LuDownload } from "react-icons/lu";
import { LiaLinkedin } from "react-icons/lia";
import { urlFor } from '../../utility/imageUrl';
import useDetail from "../../Hooks/useDetail";
import useSocialLinks from "../../Hooks/useSocialLinks";
import useResume from "../../Hooks/useResume";
import useEducation from "../../Hooks/useEducation";
import useStatus from "../../Hooks/useStatus";
import useSkill from "../../Hooks/useSkill";
import { useLocation, useNavigate } from 'react-router-dom';
function About() {
  const { data: details, loading: detailLoading, error: detailError } = useDetail();
  const { data: socialLinks, loading: socialLoading, error: socialError } = useSocialLinks();
  const { data: resumedata, loading: resumeLoading, error: resumeError } = useResume();
  const { data: educationdata, loading: educationLoading, error: educationError } = useEducation();
  const { data: statusdata, loading: statusLoading, error: statusError } = useStatus();
  const { data: skilldata, loading: skillLoading, error: skillError } = useSkill();

  const detail = details[0] || {};
  const social = socialLinks[0] || {};
  const resume = resumedata[0] || {};
  const status = statusdata[0] || {};
  console.log(resume.resumeFile);

  const PROJECT_ID = 'efs2nnkz'; // Your actual project ID
  const DATASET = 'about__detail'; // Your actual dataset name

const getUrlFromId = (ref) => {
  // Example ref: "file-fxxxxxxxxxxxxxxxxxxxx-xlsx"
  const [_file, id, extension] = ref.split('-');
  return `https://cdn.sanity.io/files/${PROJECT_ID}/${DATASET}/${id}.${extension}`;
};

// Usage
const resumeDownload = () => {
  const assetRef = resume.resumeFile.asset._ref; // e.g., "file-fxxxxxxxxxxxxxxxxxxxx-xlsx"
  const fileUrl = getUrlFromId(assetRef);

  // Create a link element and open in a new tab
  const link = document.createElement('a');
  link.href = fileUrl;
  link.target = '_blank'; // Open in a new tab
  link.click();
};


  const handleClick = () => {
    window.open(social.linkedin, '_blank');
  };  

  const location = useLocation();
  const navigate = useNavigate();

  const isContactPage = location.pathname === '/contact';

  // Redirect to /contact when the button is clicked
  const handleConnectClick = () => {
    navigate('/contact');
  };

  return (
    <div className='About'>
      <div className="background__colour profile__photo">
      {detail.photo && <img src={urlFor(detail.photo).url()} alt='Profile Photo'/>}
        <div className="status">
          {status.status === 'open' ? 'Open for Work' : status.currentTitle || 'No Current Title'}
        </div>
      </div>
      <div className='heading'>
        <img src={images.star1} alt="*" />
        <h1>Self - Summary</h1>
        <img src={images.star1} alt="*" />
      </div>
      <div className="background__colour overflow__scroll self__summary">
        <img src={images.star2} className='star__background' alt='*'/>
        <h1>{detail.name}</h1>
        <p>{detail.description}</p>
      </div>
      <div className="background__colour overflow__scroll skills">
        <img src={images.star2} className='star__background' alt='*'/>
        <h1>SKILLS</h1>
        <div className="skills__tecnology">
          {skilldata && skilldata.length > 0 ? (
            skilldata.map((skill, index) => (
              <div key={index}>
                <img src={urlFor(skill.image)} alt={skill.name} /> {/* Assuming `skill.icon` holds the image URL or path */}
                <p>{skill.name}</p>
              </div>
            ))
          ) : (
            <p>No skills available</p>
          )}
        </div>
      </div>
      <div className="background__colour overflow__scroll education">
        <img src={images.star2} className='star__background' alt='*'/>
        <h1>EDUCATION</h1>

        {educationdata
        .sort((a, b) => {
          // Convert startYear to numbers for comparison
          const yearA = parseInt(a.endYear, 10);
          const yearB = parseInt(b.endYear, 10);

          // Sort in descending order
          return yearB - yearA;
        })
        .map((edu, index) => (
          <div key={index} className='education__detail'>
            <p className="year">{edu.startYear} - {edu.endYear}</p>
            <h3 className="organisation">{edu.institution}</h3>
            <p className="designation">{edu.degree}</p>
          </div>
        ))}

        
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
        <button onClick={handleConnectClick}>&rarr;</button>
      </div>
      <div className="background__colour Resume">
        <ImFilePdf size={100} className='pdf_icon' style={{ cursor: 'pointer' }} onClick={resumeDownload}/>
        <button onClick={resumeDownload}> <LuDownload size={20} color='white' className='download'/>Resume</button>
      </div>

    </div>
  )
}

export default About
