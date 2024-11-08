import React, { useState } from 'react';
import './contact.css';
import { LiaLinkedin } from "react-icons/lia";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import useSocialLinks from "../../Hooks/useSocialLinks";
import sanityClient from '../../sanityClient'; // Import your Sanity client

function Contact() {
  const { data: socialLinks, loading: socialLoading, error: socialError } = useSocialLinks();
  const social = socialLinks[0] || {};
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // New state to track submission status

  const handleLinkedInClick = () => {
    window.open(social.linkedin, '_blank');
  };

  const handleGmailClick = () => {
    window.open(`mailto:${social.gmail}`, '_blank');
  };

  const handleWhatsappClick = () => {
    window.open(`https://wa.me/${social.phoneNumber}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messageData = {
      name,
      email,
      content: message,
      createdAt: new Date().toISOString(),
    };

    try {
      await sanityClient.create({
        _type: 'message',
        ...messageData,
      });
      setSubmitted(true); // Set submitted to true
      // Optionally reset the form
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <div className='Contact'>
      <div className='heading pos_center'>
        <h1><span>Let's</span> Connect 😄</h1> 
      </div>

      {/* Gmail */}
      <div className="gmail" onClick={handleGmailClick}>
        <BiLogoGmail size={150} className='Gmail' />
        <h3>@gmail</h3>
      </div>

      {/* LinkedIn */}
      <div className="linkedin" onClick={handleLinkedInClick}>
        <LiaLinkedin size={150} className='Linkedin' />
        <h3>@linkedin</h3>
      </div>

      {/* WhatsApp */}
      <div className="whatsapp" onClick={handleWhatsappClick}>
        <FaWhatsapp size={150} className='Whatsapp' />
        <h3>@whatsapp</h3>
      </div>

      {/* Additional Message Section */}
      <div className="msg">
        {submitted ? (
          <p className='Thanks'>Thank you for your message ❤️</p> // Display confirmation message
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                placeholder='Name'
                type="text" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="form-input" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                placeholder='Email'
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="form-input" 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                placeholder='Type your message'
                id="message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                className="form-textarea" 
                required 
              />
            </div>
            <button type="submit" className="submit-button">Send</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
