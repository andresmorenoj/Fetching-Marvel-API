import React from 'react';
import '../assets/styles/components/Comic.scss';

const Comic = ({ comicImg, comicTitle }) => (
  <div className='container_comic'>
    <img className='comic_img' src={comicImg} alt={comicTitle} />
    <p className='comic_title'>{comicTitle}</p>
  </div>
);

export default Comic;