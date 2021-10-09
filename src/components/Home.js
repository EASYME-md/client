import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Title from './Title';
import TextScreen from './TextScreen';
import NotFound from './NotFound';
import Loading from './Loading';
import { load, resetError } from '../features/slice';

const Home = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { isLoading, error } = useSelector((state) => state.contents);

  useEffect(() => {
    let link = pathname.replace('/d/', '');

    if (link === '/d') {
      link = '';
    }

    dispatch(resetError());
    dispatch(load(link));
  }, []);

  if (error) {
    return <NotFound message={error} />;
  }

  return (
    <>
      <Title />
      {isLoading
        ? <Loading />
        : <TextScreen />
      }
    </>
  );
};

export default Home;
