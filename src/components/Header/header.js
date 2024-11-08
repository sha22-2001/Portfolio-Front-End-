import React from 'react';
import './header.css';
import images from '../../assets/image/image';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isContactPage = location.pathname === '/contact';

  // Redirect to /contact when the button is clicked
  const handleConnectClick = () => {
    navigate('/contact');
  };

  return (
    <div className='header'>
      <div className='Logo'>
        <img src={images.logo} alt="Logo" />
      </div>
      <div className='Option'>
        <Link to="/about">About</Link>
        <Link to="/project">Project</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className={`lets__talk ${isContactPage ? 'fade-out' : ''}`}>
        <button onClick={handleConnectClick}>Let's Connect</button>
      </div>
    </div>
  );
}

export default Header;
