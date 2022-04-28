import React from 'react';

import '../styles/shared/footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='footer-center'>
        <div className='logo'>
          <h3>
            take<span className='logo-span'>All</span>
            <span className='copyright'>&copy; {new Date().getFullYear()}</span>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
