import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import Title from './Title';
import Editor from './Editor';
import Preview from './Preview';
import SharingButton from './SharingButton';
import { load } from '../features/contentsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { linkId } = useParams();
  const { isLoading, error } = useSelector((state) => state.contents);

  useEffect(() => {
    dispatch(load(linkId));
  }, []);

  if (error) {
    return <div>에러</div>;
  }

  return (
    <>
      <SharingButton />
      <Title />
      {isLoading
        ? <div>로딩중</div>
        : <>
          <Editor />
          <Preview />
        </>
      }
    </>
  )
}

export default Home;
