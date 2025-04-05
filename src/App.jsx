// App.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bull from '/icons8-year-of-ox-96.png';
import './App.css';
import SocialIcons from './components/SocialIcons';

function App() {
  const [animateOut, setAnimateOut] = useState(false);
  const navigate = useNavigate();

  const handleBullClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setAnimateOut(true);
    // Wait for the animation to complete before navigating to '/landing'
    setTimeout(() => {
      navigate('/about');
    }, 500); // Adjust this delay to match your CSS animation duration
  };

  return (
    <>
      {/* Canvas for matrix digital rain as a permanent background */}
      <canvas id="c"></canvas>

      {/* Centered container for content with conditional animation class */}
      <div className={`content-container ${animateOut ? 'animate-out' : ''}`}>
        <a href="/about" onClick={handleBullClick}>
          <img src={bull} className="logo" alt="Bull logo" />
        </a>
        {/* Social icons container */}
        <SocialIcons/>
      </div>
    </>
  );
}

export default App;
