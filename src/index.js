import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';

import About from './components/About/about';
import Works from './components/Works/works';
import MobileWorks from './components/MobileWorks/MobileWorks'; 
import Contact from './components/Contact/contact';
import NotFound from './components/Error/error';
import useWindowWidth from './Hooks/useWindowWidth';

// Define the ResponsiveWorks component above root.render()
const ResponsiveWorks = () => {
  const width = useWindowWidth();
  
  // If the screen width is less than 768px, render the mobile version of Works
  return width < 1024 ? <MobileWorks /> : <Works />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<ResponsiveWorks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
