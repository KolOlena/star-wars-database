import React from "react";
import './error-indicator.css';
import icon from './50012_original.jpg';


const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <img src={icon} alt='error icon'/>
      <span className="boom">BOOM!</span>
      <span>
        something wrong
      </span>
      <span>
        but we fix it
      </span>
    </div>
  )
};

export default ErrorIndicator;
