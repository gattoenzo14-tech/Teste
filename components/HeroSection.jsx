import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero bg-pattern">
      <div className="container">
        <div className="hero-content">
          <h1 className="fade-in-up">
            AI Infrastructure That <span className="text-gold">Scales</span>
          </h1>
          <p className="fade-in-up">
            Deploy, manage, and optimize machine learning workloads at global scale with zero-ops precision.
          </p>
          <div className="fade-in-up">
            <a href="#features" className="btn btn-primary">
              <span className="btn-icon">→</span>Get Started
            </a>
            <a href="#about" className="btn btn-secondary">
              <span className="btn-icon">→</span>Learn More
            </a>
          </div>
        </div>
        <div className="hero-image fade-in-up">
          <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#d97706', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#0ea5e9', stopOpacity: 0.8 }} />
              </linearGradient>
            </defs>
            <circle cx="100" cy="80" r="20" fill="url(#grad1)" />
            <circle cx="300" cy="150" r="15" fill="#d97706" opacity="0.7" />
            <circle cx="50" cy="200" r="12" fill="#0ea5e9" opacity="0.6" />
            <path d="M50,100 Q150,50 250,100 T450,100" stroke="#d97706" stroke-width="2" fill="none" opacity="0.3"/>
            <path d="M100,200 Q200,150 300,200" stroke="#0ea5e9" stroke-width="1.5" fill="none" opacity="0.4"/>
            <polygon points="180,120 200,90 220,120" fill="#d97706" />
            <polygon points="280,180 300,150 320,180" fill="#0ea5e9" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;