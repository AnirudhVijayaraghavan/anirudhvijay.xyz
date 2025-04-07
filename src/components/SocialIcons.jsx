import React, { useEffect } from 'react';
import { gsap } from "gsap";
import '../csspages/SocialIcons.css';
import githublogo from '/iconmonstr-github-5-240-dark.png';
import linkedinlogo from '/iconmonstr-linkedin-5-240-dark.png';
import instagramlogo from '/iconmonstr-instagram-15-240-dark.png';

// Global counter variable (persists for the life of the SPA)
let socialIconsAnimationCount = 1;

function SocialIcons() {
    useEffect(() => {
        if (socialIconsAnimationCount <= 2) {
            gsap.fromTo(
                '.social-icons',
                { x: '-100%', opacity: 0 },
                {
                    x: '0%',
                    opacity: 1,
                    duration: 2,
                    stagger: 0.5,
                    ease: 'bounce.out',
                    onComplete: () => {
                        socialIconsAnimationCount++;
                    }
                }
            );
        }
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
