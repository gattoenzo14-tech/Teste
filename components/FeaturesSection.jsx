import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Orchestration Engine',
      description: 'Kubernetes-native workload scheduling with intelligent resource allocation and auto-scaling based on predictive demand modeling.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      title: 'Unified Data Plane',
      description: 'Seamless integration with object stores, databases, and streaming platforms through standardized adapters and schema evolution.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 10H6v-2h12v2zm0-4H6V9h12v2z"/>
        </svg>
      )
    },
    {
      title: 'Observability Suite',
      description: 'Real-time metrics, distributed tracing, and automated anomaly detection with customizable alerting and root-cause analysis.',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M19 13H5v-2h14v2zm0-4H5V7h14v2z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="bg-pattern">
      <div className="container">
        <h2 className="text-center fade-in-up">Platform Capabilities</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className={`feature-card fade-in-up`}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;