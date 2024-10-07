import React from 'react';
import './Header.css';
import './About.css';
import './Gallery.css';
import './Contact.css';
import './Projects.css';

const Header = () => {
    return (
        <header>
            <h1>Malena Lodi</h1>
            <nav>
                <a href="#about">About</a>
                <a href="#Projects">Projects</a>
                <a href="#Gallery">Gallery</a>
                <a href="#Contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;