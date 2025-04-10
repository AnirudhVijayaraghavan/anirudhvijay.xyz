// App.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bull from '/icons8-year-of-ox-96.png';
import './App.css';
import SocialIcons from './components/SocialIcons';

function App() {
  const [animateOut, setAnimateOut] = useState(false);
  const navigate = useNavigate();
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const handleBullClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setAnimateOut(true);
    // Wait for the animation to complete before navigating to '/landing'
    setTimeout(() => {
      navigate('/about');
    }, 500); // Adjust this delay to match your CSS animation duration
  };

  const api_url = "/api/quotes/";

  useEffect(() => {
    async function getapi(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          const randomQuote = data[randomIndex];
          setQuote(randomQuote.q);
          setAuthor(randomQuote.a);
        }
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    }
    getapi(api_url);
  }, [api_url]);


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
        <SocialIcons />
        {/* Random Inspirational Quote */}
        <br /><br />
        <div className="quote-container">
          <br />
          {quote ? (
            <blockquote>
              <p>"{quote}"</p>
              <footer>- {author}</footer>
            </blockquote>
          ) : (
            <p>Loading quote...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
