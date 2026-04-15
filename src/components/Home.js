import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Title from './Title';
import TextScreen from './TextScreen';
import ErrorPage from './shared/ErrorPage';
import Loading from './Loading';
import { load, loadSuccess, resetError } from '../features/slice';
import { parseShareHash } from '../utils/urlShare';
import { loadDraft } from '../utils/draftStorage';

const Home = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { isLoading, error } = useSelector((state) => state.contents, shallowEqual);

  useEffect(() => {
    dispatch(resetError());

    const hashText = parseShareHash(window.location.hash);
    if (hashText) {
      dispatch(loadSuccess(hashText));
      return;
    }

    let link = pathname.replace('/d/', '');

    if (link === '/d') {
      link = '';
    }

    if (!link) {
      const draft = loadDraft();
      if (draft) {
        dispatch(loadSuccess(draft));
        return;
      }
    }

    dispatch(load(link));
  }, [dispatch, pathname]);

  if (error) {
    return <ErrorPage message={error} />;
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
