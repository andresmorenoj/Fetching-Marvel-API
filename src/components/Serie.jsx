import React from 'react';
import '../assets/styles/components/Comic.scss';

const Serie = ({ serieImg, serieTitle }) => (
  <div className='container_comic'>
    <img className='comic_img' src={serieImg} alt={serieTitle} />
    <p className='comic_title'>{serieTitle}</p>
  </div>
);

export default Serie;