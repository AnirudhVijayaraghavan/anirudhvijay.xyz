import React, { useEffect, useState } from 'react';
import '../csspages/AboutCards.css';
import { gsap } from "gsap";
import Card from './Card';
import AboutContents from '../contents.json';
import techIconMap from '../matrix/techicons';

function AboutCards() {

    useEffect(() => {
        gsap.fromTo(
            '.card',
            { x: '-100%', opacity: 0 },
            {
                x: '0%',
                opacity: 1,
                duration: 0.3,
                stagger: 0.3,
                ease: 'power1.out',
                onComplete: () => {
                    // Clear the inline transform so that CSS hover effects can apply
                    gsap.set('.card', { clearProps: 'transform' });
                }
            }
        );
    }, []);

    return (
        <div className="landing-cards">
            <Card data={AboutContents.about} />
            {/* <Card data={AboutContents.techstack} techs={techs} /> */}
            <div className="card">
                <h3>{AboutContents.techstack.title}</h3>
                {AboutContents.techstack.sections.map((section, i) => (
                    <div key={i} className="tech-category">
                        <strong>{section.label}:</strong>
                        <div className="tech-icon-row">
                            {section.techs.map((tech, j) => (
                                // "title" attribute provides a native tooltip on hover
                                <div key={j} className="tech-icon" title={tech}>
                                    {techIconMap[tech] || tech}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Card data={AboutContents.history} />
            <Card data={AboutContents.funstuff} />
            <Card data={AboutContents.misc} />
        </div>
    );
}

export default AboutCards;