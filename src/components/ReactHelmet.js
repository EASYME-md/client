import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import favicon from '../assets/images/easyme.ico';
import image from '../assets/images/preview.png';

const ReactHelmet = () => {
  const CLIENT_URI = process.env.REACT_APP_CLIENT_URI;
  const title = 'EASYME.md | 리드미를 쉽게! 이지미';
  const description = 'README.md를 쉽게 작성하는 방법, EASYME.md!';

  return (
    <HelmetProvider>
      <Helmet>
        <link rel='icon' href={favicon} />
        <link rel='canonical' href={CLIENT_URI} />
        <meta charSet='utf-8' />
        <meta name='title' content={title} />
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta content='index' name='robots' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />
        <meta property='og:url' content={CLIENT_URI} />
        <meta property='og:site_name' content={title} />

        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
      </Helmet>
    </HelmetProvider>
  )
};

export default ReactHelmet
