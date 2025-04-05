import githublogo from '/iconmonstr-github-5-240-dark.png';
import linkedinlogo from '/iconmonstr-linkedin-5-240-dark.png';
import instagramlogo from '/iconmonstr-instagram-15-240-dark.png';
import React, { useEffect } from 'react';
import '../csspages/SocialIcons.css';
import { gsap } from "gsap";

function SocialIcons() {
    useEffect(() => {
        gsap.fromTo(
            '.social-icons',
            { x: '-100%', opacity: 0 },
            {
                x: '0%',
                opacity: 1,
                duration: 2,
                stagger: 0.5,
                ease: 'bounce.out'
            }
        );
    }, []);
    return (
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
    );
}

export default SocialIcons;