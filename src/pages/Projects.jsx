import React, { useState } from 'react';
import '../csspages/Landing.css'; // Reuse the same CSS or create Projects.css if needed
import NavBar from '../components/NavBar';
import AboutCards from '../components/AboutCards';

function Projects() {
    return (
        <>
            {/* Matrix canvas and overlay (assumed to be persistent across pages) */}
            <canvas id="c"></canvas>
            <div className="overlay fade-out"></div>
            {/* Two-column layout container */}
            <div className="landing-container">
                <NavBar />
                <main className="right-column">
                    <br />
                    <div className="welcome">
                        <h1 data-text="Projects.">
                            Projects.
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

export default Projects;
