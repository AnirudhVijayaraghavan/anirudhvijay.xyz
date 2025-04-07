import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import '../csspages/NavBar.css';
import profilePic from '/profilepic.jpg';

function NavBar() {
    return (
        <aside className="left-column">
            <div className="profile-container">
                <img src={profilePic} alt="Profile" className="profile-pic" />
                <SocialIcons />
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink
                            to="/about"
                            end
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            end
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            end
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default NavBar;
