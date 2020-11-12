import React from 'react';
import { Link } from 'react-router-dom';
import logoMarvel from '../assets/static/logoMarvel.png';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <header className='header'>
    <Link to='https://www.marvel.com/'>
      <img className='logo' src={logoMarvel} alt="" />
    </Link>
  </header>
);

export default Header;