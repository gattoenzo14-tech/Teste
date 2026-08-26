import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-logo">NEXUS</div>
            <p className="text-muted">AI Infrastructure Platform</p>
            <div className="social-links">
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.87-2.38c-.8.47-1.69.78-2.6.89a4.3 4.3 0 0 0-8.22 4.48A4.32 4.32 0 0 1 3 4.31a4.3 4.3 0 0 0 1.32 5.69c-.28.01-.56-.02-.84-.06a4.3 4.3 0 0 0 3.98 4.26A8.56 8.56 0 0 1 2 18.23a8.44 8.44 0 0 1-.91-.18c-.41.11-.84.18-1.24.22a8.5 8.5 0 0 1 4.5 2.8c4.97 2.71 10.91 4.25 16.95 4.25 20.33 0 31.48-16.86 31.48-31.48 0-.48-.01-.96-.09-1.44A12.53 12.53 0 0 0 22.56 6z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v16c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27h-3l-.01-7h3V7z"/>
                </svg>
              </a>
              <a href="#" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8 11.38-.22-.2-.43-.48-.43-.84v-2.04c3.15.36 3.82-1.07 3.82-1.83 0-.94-.32-1.66-.86-2.08-.86-.18-1.76-.9-1.76-1.96 0-.44.11-.81.29-1.11-.65-.15-1.33-.33-1.33-.73v-2.4c.55-.15 1.15-.36 1.15-.8 0-.49-.06-.88-.23-1.24-.11-.29-.41-1- .41-1.96 0-.45.13-.82.36-1.02-.13-.08-.29-.14-.29-.14v-2.4c-.23-.56-.78-.94-1.46-.94-1.31 0-2.31 1.01-2.31 2.24v2.9c-.36.23-.47.56-.16.95.32.31.69.47 1.18.49 1.37 0 2.34-.89 2.34-1.96v-.65c-.41.15-.84.23-1.35.23-.86 0-1.56-.68-1.56-1.54 0-.85.56-1.54 1.25-1.54.81 0 1.53.44 1.53 1.06v2.05z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Product</h3>
            <ul>
              <li><a href="#">Platform Overview</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Webinars</a></li>
              <li><a href="#">Whitepapers</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} NEXUS Technologies. All rights reserved.</p>
          <p className="text-muted mt-2">Privacy Policy &bull; Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;