import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as serieInfo from '../redux/actions/serieInfo';
import { Modal } from './Modal';
import '../assets/styles/containers/Series.scss';

const Serie = (props) => {
  const { serieImg, serieTitle, idSerie } = props;
  const [modal, setModal] = useState(false);

  let serieData = props.seriesReducer.series.find(item => item.id === idSerie);
  const handleModal = () => {

    console.log('modal:', props);
    return (
      <Modal>
        <div className='modal_container'>
          <div className='close_modal'>
            <button onClick={() => setModal(false)}>X</button>
          </div>
          <div className='modal_container-creators'>
            <h4>Creators</h4>
            {
              serieData.creators.items.map(item => <p key={item.name}>{item.name}</p>)
            }
          </div>
          <div className='modal_container-stories'>
            <hr />
            <h4>Stories</h4>
            {
              serieData.stories.items.map(item => <p key={item.name}>{item.name}</p>)
            }
          </div>
          <div className='modal_container-characters'>
            <hr />
            <h4>Characters</h4>
            {
              serieData.characters.items.map(item => <p key={item.name}>{item.name}</p>)
            }
          </div>
        </div>

      </Modal>
    );
  };

  return (
    <>
      <div className='container_comic' >
        <img className='comic_img' src={serieImg} alt={serieTitle} onClick={() => setModal(true)} />
        <p className='comic_title'>{serieTitle}</p>

      </div>
      {
        modal && handleModal()
      }
    </>
  );
};


const mapStateToProps = ({ seriesReducer }) => {
  return {
    seriesReducer
  };
};

const mapDispatchToProps = {
  ...serieInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Serie);