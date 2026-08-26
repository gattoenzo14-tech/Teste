import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="logo">NEXUS</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">Solution</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#footer">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;