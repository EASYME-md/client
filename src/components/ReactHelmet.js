import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import favicon from '../assets/easyme.ico';
import image from '../assets/thumbnail.png';

const ReactHelmet = () => {
  const title = 'EASYME.md | 리드미를 쉽게! 이지미';
  const description = 'README.md를 쉽게 작성하는 방법, EASYME.md!';

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <link rel='icon' href={favicon} />
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />
        <meta property='og:url' content='url' />
        <meta property='og:site_name' content={title} />

        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
      </Helmet>
    </HelmetProvider>
  )
};

export default ReactHelmet
