import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="develop">
      <p>This site was developed by: &nbsp;</p>
      <a href='https://www.linkedin.com/in/andres-moreno-jf/' target='_blank'>Andrés Moreno</a>
    </div>
    <div className='credits'>
      <p>Credits to: &nbsp;</p>
      <a href='https://developer.marvel.com/' target='_blank'>Marvel Developer</a>
    </div>
  </footer>
);

export default Footer;