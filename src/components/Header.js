// frontend/src/components/Header.js

import React from 'react';
// REMOVE THIS LINE: import styles from './Header.module.css'; 

const Header = () => {
    return (
        // CHANGE classNames from {styles.x} to "x"
        <header className="header">
            <div className="logo">
                <img src="/logo.png" alt="CHEXSHIRT Logo" className="logo-img" />
            </div>
            <nav className="navLinks">
                <a href="#">SHIRTS</a>
                <a href="#">SHOP</a>
                <a href="#">OUR STORY</a>
                <a href="#">FAVORITES</a>
            </nav>
            <div className="userActions">
                <span>🔍</span>
                <span>🛒</span>
                <span>👤</span>
            </div>
        </header>
    );
};

export default Header;