import React from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import PromoBanner from './components/PromoBanner';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <PromoBanner />
        {/* You can add more sections here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;