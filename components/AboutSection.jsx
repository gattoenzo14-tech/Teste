import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-pattern">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="fade-in-up">The Future of AI Operations</h2>
            <p className="fade-in-up">
              Most AI infrastructure forces teams to choose between flexibility and operational
              simplicity. NEXUS eliminates this trade-off by providing a unified platform that
              abstracts complexity while preserving full control over your ML lifecycle.
            </p>
            <p className="fade-in-up">
              From experimental notebooks to production-scale training clusters, our adaptive
              orchestration layer dynamically allocates resources based on workload
              characteristics, ensuring optimal performance and cost efficiency without manual
              intervention.
            </p>
            <a href="#features" className="btn btn-primary fade-in-up mt-3">
              <span className="btn-icon">→</span>Explore Features
            </a>
          </div>
          <div className="about-image fade-in-up">
            <img
              src="data:image/svg+xml,%3Csvg width='300' height='200' viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%230f172a'/%3E%3Cpath d='M50 30 L250 30 L250 170 L50 170 Z' fill='none' stroke='%23d97706' stroke-width='2'/%3E%3Ccircle cx='100' cy='80' r='15' fill='%230ea5e9'/%3E%3Ccircle cx='200' cy='120' r='12' fill='%23d97706'/%3E%3Cpath d='M50 50 Q150 20 250 50' stroke='%230ea5e9' stroke-width='1.5' fill='none'/%3E%3Cpath d='M80 100 Q150 60 220 100' stroke='%23d97706' stroke-width='1' fill='none'/%3E%3C/svg%3E"
              alt="NEXUS platform architecture diagram"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;