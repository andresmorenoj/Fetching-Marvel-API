import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as comicsActions from '../redux/actions/comicsActions';
import Comic from '../components/Comic';
import '../assets/styles/containers/ComicPage.scss';

const ComicPage = (props) => {
  console.log(props.oneComic.oneComic);
  /*  console.log('path: ', props.oneComic.oneComic.thumbnail.path); */

  useEffect(() => {
    props.getAllComics(5);
  }, []);

  const showRelatedComics = () => {
    return props.comicsReducer.comics.length > 0
      && props.comicsReducer.comics.map(item => (
        <Comic
          key={item.id}
          comicImg={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          comicTitle={item.title}
        />
      ));
  };

  console.log(props.comicsReducer.comics);

  return (
    <section className='main_container'>
      <div className='container'>
        <figure>
          <img src={`${props.oneComic.oneComic[2]}.${props.oneComic.oneComic[3]}`} alt="" />
        </figure>
        <div>
          <h2>{props.oneComic.oneComic[1]}</h2>
          <p>Price: {props.oneComic.oneComic[4]}</p>
        </div>
      </div>

      <div className='relatedComics'>
        <hr />
        <h3>Related Comics</h3>
        <div className='relatedComics_container'>
          {
            showRelatedComics()
          }
        </div>

      </div>
    </section>
  );
};

const mapStateToProps = ({ comicsReducer, oneComic }) => {
  return {
    comicsReducer,
    oneComic
  };
};

const mapDispatchToProps = {
  ...comicsActions
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicPage);