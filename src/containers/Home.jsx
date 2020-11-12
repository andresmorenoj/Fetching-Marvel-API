import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as comicsActions from '../redux/actions/comicsActions';
import Comic from '../components/Comic';
import '../assets/styles/containers/Home.scss';

const Home = (props) => {
  useEffect(() => {
    props.getAllComis();
  }, []);

  return (
    <section className='comics_container'>
      {props.comics &&
        props.comics.map((item) => (
          <Comic
            key={item.id}
            comicImg={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            comicTitle={item.title}
          />
        ))
      }
    </section>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.comicsReducer;
};

export default connect(mapStateToProps, comicsActions)(Home);