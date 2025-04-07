import React, { useEffect, useState } from 'react';
import '../csspages/Landing.css';
import AboutCards from '../components/AboutCards';
import NavBar from '../components/NavBar';

function About() {
  // Initialize fadeOut based on localStorage flag
  const initialFadeOut = localStorage.getItem('aboutFadeOutDone') === 'true';
  const [fadeOut, setFadeOut] = useState(initialFadeOut);

  useEffect(() => {
    // If fade-out hasn't run yet, schedule it and mark it in localStorage
    if (!initialFadeOut) {
      const timer = setTimeout(() => {
        setFadeOut(true);
        localStorage.setItem('aboutFadeOutDone', 'true');
      }, 100); // Adjust delay as needed
      return () => clearTimeout(timer);
    }
  }, [initialFadeOut]);

  return (
    <>
      {/* Matrix canvas for the digital rain background */}
      <canvas id="c"></canvas>

      {/* Full-page overlay for fade-in effect.
          If fadeOut is true, the "fade-out" class is added. */}
      <div className={`overlay ${fadeOut ? 'fade-out' : ''}`}></div>

      {/* Two-column layout container */}
      <div className="landing-container">
        <NavBar />
        <main className="right-column">
          <br />
          <div className="welcome">
            <h1 data-text="Greetings, I'm Anirudh Vijayaraghavan.">
              Greetings, I'm Anirudh Vijayaraghavan.
            </h1>
          </div>
          <br />
          <br />
          {/* Additional main content */}
          <AboutCards />
        </main>
      </div>
    </>
  );
}

export default About;
