import React, { useEffect } from 'react';
import { gsap } from "gsap";
import '../csspages/ContactCards.css';
import ContactForm from './ContactForm';

function ContactCards() {
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
                onComplete: () => gsap.set('.card', { clearProps: 'transform' })
            }
        );
    }, []);

    return (
        <div className="contact-cards-container">
            <div className="card">
                <ContactForm />
            </div>
            <div className="card">
                <h3>Chat functionality.</h3>
                <p>Coming soon !</p>
            </div>
        </div>
    );
}

export default ContactCards;