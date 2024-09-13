import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';

import About from './components/About/about';
import Works from './components/Works/works';
import Contact from './components/Contact/contact';
import NotFound from './components/Error/error';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
