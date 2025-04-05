// Landing.jsx
import React, { useEffect, useState } from 'react';
import '../csspages/Landing.css';
import AboutCards from '../components/AboutCards';
import NavBar from '../components/NavBar';

function About() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
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

        <NavBar />
        <main className="right-column">
          <br />
          <div className="welcome">
            <h1 data-text="Greetings, I'm Anirudh Vijayaraghavan.">
              Greetings, I'm Anirudh Vijayaraghavan.
            </h1>
          </div>

          <br />
          {/* Additional main content can go here */}
          <AboutCards />
        </main>
      </div>
    </>
  );
}

export default About;