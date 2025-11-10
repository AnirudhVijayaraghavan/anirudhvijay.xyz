// ProjectsCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../csspages/ProjectsSection.css';

// Sample project data—replace with your own or import from JSON.
const projectsData = [
    {
        title: 'lms.anirudhvijay.xyz',
        description: 'A demo app of a Library Management System, built with Laravel, VueJS, and Inertia.',
        image: '/lmsmain.png',
        demo: 'https://www.lms.anirudhvijay.xyz'
    },
    {
        title: 'cloudpractitionerhelp.com',
        description: 'Actively developing an AI assisted test simulator, to help students clear AWS Certified Cloud Practitioner exam, and more.',
        image: '/cphmain.png',
        demo: 'https://www.cloudpractitionerhelp.com'
    },
    {
        title: 'shorty.anirudhvijay.xyz',
        description: 'A production ready url shortener, built with Laravel, Livewire, deployed to a Linux server, with NGINX config. Utlized Gates, Policies, Laravel Scout with Typesense search features, Redis, Middlewares, Authentication, MySQL, asynchronous processing for e-mail through job dispatch, and CRONs.',
        image: '/shortymain.png',
        demo: 'https://shorty.anirudhvijay.xyz'
    },
    {
        title: 'blogger.anirudhvijay.xyz',
        description: 'A production ready simple blogging website, built with Laravel, Livewire, Blade templates, deployed to a shared VPS. Utlized Meilisearch, Real-time comms. with Laravel Reverb sockets, E-mail with asynchronous dispatch jobs.',
        image: '/bloggermain.png',
        demo: 'https://blogger.anirudhvijay.xyz'
    },
    {
        title: 'Combat Primal',
        description: 'A third-person, open world game built on Unreal Engine 5, with Motion Matching, Motion Warping, Realistic Weather, Parkour, and AI Enemies (UE5 Behaviour Trees). Complete with a full fledged AAA style main menu settings, with various level progressions.',
        image: '/combatprimalmain.png',
        demo: 'https://shorty.anirudhvijay.xyz'
    },
    {
        title: 'Roll-a-ball',
        description: 'A fun, quirky, mini roll-a-ball game built on Unity 3D, with AI mesh navigated enemies, level progressions.\n Other features include: Background music/Collectible pickup noises, Basic enemy/enemies for waypoints, Win/lose states and Respawn points, Map assets (nature packs for world building)',
        image: '/rollaballmain.png',
        demo: 'https://github.com/AnirudhVijayaraghavan/Unity-Roll-A-Ball-Custom-Game'
    },
    {
        title: 'Operating System',
        description: 'Created my own operating system, as a part of an academic project for my Operating Systems class, taught by Professor Ahmed Banafa. Emulated with QEMU, Built with C, C++, asm, and coffee.',
        image: '/osmain.png',
        demo: 'https://github.com/AnirudhVijayaraghavan/OperatingSystem-CSYE6230_OperatingSystems'
    }
];

function ProjectsSection() {
    const [current, setCurrent] = useState(0);
    const containerRef = useRef(null);

    // Next and Prev handlers.
    const nextProject = () => {
        setCurrent(prev => (prev + 1) % projectsData.length);
    };

    const prevProject = () => {
        setCurrent(prev => (prev - 1 + projectsData.length) % projectsData.length);
    };

    useEffect(() => {
        // GSAP animation for sliding in the project.
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
        );
    }, [current]);

    const currentProject = projectsData[current];

    return (
        <div className="carousel">
            <button className="carousel-btn prev" onClick={prevProject}>‹</button>
            <div className="carousel-content" ref={containerRef}>
                <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="carousel-image"
                />
                <div className="carousel-text">
                    <h2>
                        {currentProject.title} |
                        {currentProject.demo && (
                            // Render the demo link right next to the title, with a vertical bar separator.
                            <a
                                href={currentProject.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="demo-link"
                            >
                                {' '}Demo
                            </a>
                        )}
                    </h2>
                    <p>{currentProject.description}</p>
                </div>
            </div>
            <button className="carousel-btn next" onClick={nextProject}>›</button>
        </div>
    );
}

export default ProjectsSection;
