import React from 'react';
import './Header.css';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <>
            <div className="announcement">
                Prepaid Order 25% Discount
            </div>
            <header className="header">
                <div className="logo">
                    <img src="/logo.png" alt="ZayraApparel Logo" className="logo-img" />
                </div>
                <nav className="navLinks">
                    <a href="/collections/new-arrival">New Arrival</a>
                    <a href="/collections/men-shirt">Men Shirt</a>
                    <a href="/collections/best-selling">Best Selling</a>
                    <a href="/contact">Contact Us</a>
                </nav>
                <div className="userActions">
                    <span><FaSearch /></span>
                    <span><FaShoppingCart /></span>
                    <span><FaUser /></span>
                </div>
            </header>
        </>
    );
};

export default Header;