import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

const App = () => {
  return (
    <div id="app">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
};

export default App;