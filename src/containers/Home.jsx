import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as comicsActions from '../redux/actions/comicsActions';
import * as comicInfo from '../redux/actions/comicInfo';
import Comic from '../components/Comic';
import Spinner from '../components/Spinner';
import '../assets/styles/containers/Home.scss';

const Home = (props) => {

  useEffect(() => {
    props.getAllComics(99);
  }, []);

  const showComics = () => {
    return props.comicsReducer.comics.length > 0
      ? props.comicsReducer.comics.map(item => (
        <Comic
          key={item.id}
          comicImg={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          comicTitle={item.title}
        />
      ))
      : <Spinner />;
  };
  console.log(props.comicsReducer.comics);

  const handleComicFilter = event => {
    props.getOneComic(event.currentTarget.value);
    props.history.push(`/comic/${event.currentTarget.value}`);
  };

  return (
    <>
      <div >
        <select name="comicsList" id="comicsFilter" onChange={handleComicFilter}>
          <option value="Commics List">Comics List</option>
          {
            props.comicsReducer.comics.map(item => (
              <option key={item.id} value={item.id} >{item.title}</option>
            ))
          }
        </select>
      </div>
      <section className={props.comicsReducer.comics < 0 ? 'spinner' : 'comics_container'}>
        {
          showComics()
        }
      </section>
    </>
  );
};

const mapStateToProps = ({ comicsReducer, oneComic }) => {
  return {
    comicsReducer,
    oneComic
  };
};

const mapDispatchToProps = {
  ...comicsActions,
  ...comicInfo
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);