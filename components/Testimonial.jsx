import React from 'react';

const Testimonial = () => {
  return (
    <section id="testimonial" className="bg-pattern">
      <div className="container">
        <div className="testimonial fade-in-up">
          <p>
            "NEXUS reduced our ML infrastructure costs by 60% while doubling our model iteration
            speed. The platform's intelligence in resource allocation feels like having a dedicated
            SRE team for our AI workloads."
          </p>
          <div className="testimonial-author">
            <img
              src="data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='28' fill='%23d97706'/%3E%3Cpath d='M30 20 q4 -4 8 0 t8 4 q0 4 -4 8 t-8 4 q-4 0 -8 -4 t-4 -8 z' fill='%230f172a'/%3E%3C/svg%3E"
              alt="Alex Chen"
            />
            <div>
              <h4>Alex Chen</h4>
              <p className="text-muted">VP of ML Infrastructure, Fortune 500 Tech Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;