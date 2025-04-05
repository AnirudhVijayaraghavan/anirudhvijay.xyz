import React, { useEffect, useState } from 'react';
import SocialIcons from './SocialIcons';
import profilePic from '/profilepic.jpg';
import '../csspages/NavBar.css';


function NavBar() {
    
    return (
        <aside className="left-column">
            <div className="profile-container">
                <img src={profilePic} alt="Profile" className="profile-pic" />
                <SocialIcons />
            </div>
            <nav className="navigation">
                <ul>
                    <li className="active"><a href="/landing">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default NavBar;