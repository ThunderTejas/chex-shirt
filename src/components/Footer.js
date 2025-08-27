import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerSection">
          <h3>Collection</h3>
          <ul>
            <li><a href="/collections/new-arrival">New Arrival</a></li>
            <li><a href="/collections/men-shirt">Men Shirt</a></li>
            <li><a href="/collections/best-selling">Best Selling</a></li>
          </ul>
        </div>

        <div className="footerSection">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/search">Search</a></li>
            <li><a href="/policies/contact-information">Contact Information</a></li>
            <li><a href="/policies/shipping-policy">Shipping Policy</a></li>
            <li><a href="/policies/refund-policy">Refund Policy</a></li>
            <li><a href="/policies/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footerSection">
          <h3>Contact Us</h3>
          <div className="contactInfo">
            <p>Whatsapp: +91 9898843038</p>
            <p>Email: zayraapparel18@gmail.com</p>
            <div className="socialLinks">
              <a href="https://www.facebook.com/profile.php?id=61563421433634"><FaFacebookF /></a>
              <a href="https://www.instagram.com/zayraapparel/"><FaInstagram /></a>
              <a href="https://wa.me/919898843038"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        <div className="footerSection">
          <h3>Newsletter</h3>
          <p>Sign up for our newsletter and receive 10% off your first purchase</p>
          <form className="newsletterForm">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletterInput"
            />
            <button type="submit" className="subscribeButton">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="bottomBar">
        <p>© {new Date().getFullYear()} Zayra Apparel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;