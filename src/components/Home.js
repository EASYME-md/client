import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import Title from './Title';
import TextScreen from './TextScreen';
import SharingButton from './SharingButton';
import NotFound from './NotFound';
import { load, resetError } from '../features/slice';

const Home = () => {
  const dispatch = useDispatch();
  const { linkId } = useParams();
  const { isLoading, error } = useSelector((state) => state.contents);

  useEffect(() => {
    dispatch(resetError());
    dispatch(load(linkId));
  }, []);

  if (error) {
    return <NotFound message={error} />;
  }

  return (
    <>
      <Title />
      {isLoading
        ? <div>로딩중</div>
        : <TextScreen />
      }
    </>
  );
};

export default Home;
