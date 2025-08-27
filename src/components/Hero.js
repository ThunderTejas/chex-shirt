import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://zayraapparel.com/cdn/shop/files/man-rolls-up-shirt-sleeves.jpg',
      title: 'Premium Cotton Shirts',
      subtitle: 'Discover our exclusive collection of comfortable and stylish shirts',
    },
    {
      image: 'https://zayraapparel.com/cdn/shop/files/WhatsApp_Image_2025-04-14_at_12.20.41_PM.jpg',
      title: 'New Arrivals',
      subtitle: 'Check out our latest designs and patterns',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.image} alt={slide.title} className="hero-image" />
          <div className="hero-content">
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-subtitle">{slide.subtitle}</p>
            <a href="/collections/all" className="hero-cta">Shop Now</a>
          </div>
        </div>
      ))}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;