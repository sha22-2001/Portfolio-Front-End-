// src/components/MobileWorks.js
import React from 'react';
import './MobileWorks.css';
import { MdLockOutline } from "react-icons/md";
const MobileWorks = () => {
  return (
    <div className='Mobile__Project'>
      <div className='Errot__Mobile'>
        <MdLockOutline size={100} className='error__lock'/>
        <h3>Open on a desktop.</h3>
      </div>
      
    </div>
  );
};

export default MobileWorks;
