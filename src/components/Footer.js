import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Simple Recipes</span>{' '}
      </p>
    </footer>
  );
};

export default Footer;
