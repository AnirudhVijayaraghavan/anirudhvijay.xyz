// Landing.jsx
import React, { useEffect, useState } from 'react';
import { runMatrix } from '../matrix/matrix';
import '../csspages/Landing.css';
import profilePic from '/profilepic.jpg'; // Update with your image path

function Landing() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Initialize the matrix rain effect
    // runMatrix();

    // Trigger the overlay fade-out after mount
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 100); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Matrix canvas for the digital rain background */}
      <canvas id="c"></canvas>

      {/* Full-page overlay for fade-in effect */}
      <div className={`overlay ${fadeOut ? 'fade-out' : ''}`}></div>

      {/* Two-column layout container */}
      <div className="landing-container">
        <aside className="left-column">
          <div className="profile-container">
            <img src={profilePic} alt="Profile" className="profile-pic" />
          </div>
          <nav className="navigation">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </aside>
        <main className="right-column">
          <h1>Welcome to My Portfolio</h1>
          <p>
            This is your landing page content. Enjoy exploring the edgy hacker vibes and immersive design.
          </p>
          {/* Additional main content can go here */}
        </main>
      </div>
    </>
  );
}

export default Landing;