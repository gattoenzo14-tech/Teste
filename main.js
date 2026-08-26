import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);

// Smooth scrolling for internal links
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (anchor) {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// Add focus-visible polyfill
if (!('focusVisible' in document.documentElement.dataset)) {
  const style = document.createElement('style');
  style.textContent = `
    :focus:not(:focus-visible) { outline: none; }
    [data-focus-visible-added] { outline: 2px solid var(--accent-gold); outline-offset: 2px; }
  `;
  document.head.appendChild(style);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.documentElement.dataset.focusVisible = 'true';
    }
  });

  document.addEventListener('mousedown', () => {
    document.documentElement.dataset.focusVisible = 'false';
  });

  document.addEventListener('focusin', (e) => {
    if (document.documentElement.dataset.focusVisible === 'true') {
      e.target.dataset.focusVisibleAdded = 'true';
    }
  });

  document.addEventListener('focusout', (e) => {
    delete e.target.dataset.focusVisibleAdded;
  });
}