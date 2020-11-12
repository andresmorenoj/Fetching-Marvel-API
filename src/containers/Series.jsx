import React from 'react';
import { connect } from 'react-redux';
import Serie from '../components/Serie';
import Spinner from '../components/Spinner';
import '../assets/styles/containers/Series.scss';

const Series = (props) => {
  const showSeries = () => {
    return props.seriesReducer.series.length > 0
      ? props.seriesReducer.series.map(item => (
        <Serie
          key={item.id}
          idSerie={item.id}
          serieImg={`${item.thumbnail.path}.${item.thumbnail.extension}`}
          serieTitle={item.title}
        />
      ))
      : <Spinner />;
  };
  return (
    <>
      <h1>Series</h1>
      <section className={props.seriesReducer.series < 0 ? 'spinner' : 'series_container'}>
        {
          showSeries()
        }
      </section>

    </>
  );
};

const mapStateToProps = ({ seriesReducer }) => {
  return {
    seriesReducer
  };
};

export default connect(mapStateToProps, null)(Series);