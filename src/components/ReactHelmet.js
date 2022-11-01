import React from 'react';
import { Helmet } from 'react-helmet-async';

import favicon from '../assets/images/easyme.ico';
import image from '../assets/images/preview.png';

const ReactHelmet = () => {
  const CLIENT_URI = process.env.REACT_APP_CLIENT_URI;
  const title = 'EASYME.md | 리드미, 마크다운 작성 사이트';
  const description = 'EASYME.md(이지미)는 README(리드미) 작성, Markdown 문법이 익숙하지 않은 사람들을 위해 만든 사이트입니다.';

  return (
      <Helmet>
        <title>{title}</title>

        <meta name='description' content={description} />
        <meta name='keywords' contents='easyme, readme, 리드미, 이지미, markdown, markdownsite, 마크다운, 마크다운작성사이트' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index' />
        <meta name="google-site-verification" content="sioQswZ6K0vzDLaveDWBachAp5y9pCFuv_2widqDXc4" />

        <link rel='icon' href={favicon} />
        <link rel='canonical' href={CLIENT_URI} />
        <meta charSet='utf-8' />

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
  );
};

export default ReactHelmet;
