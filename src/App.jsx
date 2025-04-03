// App.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bull from '/icons8-year-of-ox-96.png';
import { runMatrix } from './matrix/matrix';
import './App.css';
import githublogo from '/iconmonstr-github-5-240-dark.png';
import linkedinlogo from '/iconmonstr-linkedin-5-240-dark.png';
import instagramlogo from '/iconmonstr-instagram-15-240-dark.png';

function App() {
  const [animateOut, setAnimateOut] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   runMatrix();
  // }, []);

  const handleBullClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setAnimateOut(true);
    // Wait for the animation to complete before navigating to '/landing'
    setTimeout(() => {
      navigate('/landing');
    }, 500); // Adjust this delay to match your CSS animation duration
  };

  return (
    <>
      {/* Canvas for matrix digital rain as a permanent background */}
      <canvas id="c"></canvas>

      {/* Centered container for content with conditional animation class */}
      <div className={`content-container ${animateOut ? 'animate-out' : ''}`}>
        <a href="/landing" onClick={handleBullClick}>
          <img src={bull} className="logo" alt="Bull logo" />
        </a>
        {/* Social icons container */}
        <div className="social-icons">
          <a href="https://www.instagram.com/anirudh.vijayaraghavan/" target="_blank" rel="noopener noreferrer">
            <img src={instagramlogo} alt="Instagram logo" />
          </a>
          <a href="https://www.linkedin.com/in/anirudh-vijayaraghavan/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinlogo} alt="LinkedIn logo" />
          </a>
          <a href="https://github.com/AnirudhVijayaraghavan" target="_blank" rel="noopener noreferrer">
            <img src={githublogo} alt="GitHub logo" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
