import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import '../csspages/Landing.css';
import ContactCards from '../components/ContactCards';

function Contact() {
    return (
        <>
            {/* Matrix canvas for the digital rain background */}
            <canvas id="c"></canvas>

            {/* Full-page overlay for fade-in effect.
                If fadeOut is true, the "fade-out" class is added. */}
            {/* <div className={`overlay ${fadeOut ? 'fade-out' : ''}`}></div> */}

            {/* Two-column layout container */}
            <div className="landing-container">
                <NavBar />
                <main className="right-column">
                    <br />
                    <div className="welcome">
                        <h1 data-text="Let's collaborate.... Shoot me an email.">
                            Let's collaborate.... Shoot me an email.
                        </h1>
                    </div>
                    <br />
                    <br />
                    {/* Additional main content */}
                    <ContactCards />
                </main>
            </div>
        </>
    );
}

export default Contact;
