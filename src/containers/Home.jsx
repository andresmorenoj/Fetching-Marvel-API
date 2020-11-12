import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as comicsActions from '../redux/actions/comicsActions';
import classNames from 'classname';
import Comic from '../components/Comic';
import Spinner from '../components/Spinner';
import '../assets/styles/containers/Home.scss';

const Home = (props) => {

  useEffect(() => {
    props.getAllComis();
  }, []);

  const showComics = () => {
    return props.comics.length > 0
      ? props.comics.map((item) => (
        <Comic
          key={item.id}
          comicImg={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          comicTitle={item.title}
        />
      ))
      : <Spinner />;
  };

  return (
    <section className={props.comics < 0 ? 'spinner' : 'comics_container'}>
      {/* {props.comics &&
        props.comics.map((item) => (
          <Comic
            key={item.id}
            comicImg={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            comicTitle={item.title}
          />
        ))
      } */ showComics()}
    </section>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.comicsReducer;
};

export default connect(mapStateToProps, comicsActions)(Home);