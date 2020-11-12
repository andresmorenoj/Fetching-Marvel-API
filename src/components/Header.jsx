import React from 'react';
import logoMarvel from '../assets/static/logoMarvel.png';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <a href='https://www.marvel.com/' target='_blank'>
      <img className='logo' src={logoMarvel} alt="Marvel logo" />
    </a>
  </header>
);

export default Header;