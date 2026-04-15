import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.easy-me.com';
const TITLE = 'EASYME.md | 누구나 쉬운 README·리드미 온라인 마크다운 실시간 미리보기 에디터';
const DESCRIPTION = 'EASYME.md(이지미)는 README와 Markdown 문법에 익숙하지 않아도 편하게 글을 작성할 수 있는 웹 에디터입니다. 툴바로 서식 적용, 실시간 미리보기, 링크 한 번으로 공유까지 지원합니다.';
const IMAGE_URL = `${SITE_URL}/preview.png`;

const ReactHelmet = () => {
  return (
    <Helmet>
      <html lang='ko' />
      <title>{TITLE}</title>

      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content={DESCRIPTION} />
      <meta name='keywords' content='easyme, readme, 리드미, 이지미, markdown, markdownsite, 마크다운, 마크다운작성사이트, 마크다운에디터, 실시간 미리보기' />
      <meta name='robots' content='index, follow' />
      <meta name='google-site-verification' content='sioQswZ6K0vzDLaveDWBachAp5y9pCFuv_2widqDXc4' />
      <meta name='naver-site-verification' content='59a8659d9d6fce0d75c4e70921609fad75cd54fa' />

      <link rel='icon' href='/favicon.ico' />
      <link rel='canonical' href={SITE_URL} />

      <meta property='og:type' content='website' />
      <meta property='og:locale' content='ko_KR' />
      <meta property='og:site_name' content='EASYME.md' />
      <meta property='og:title' content={TITLE} />
      <meta property='og:description' content={DESCRIPTION} />
      <meta property='og:url' content={SITE_URL} />
      <meta property='og:image' content={IMAGE_URL} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={TITLE} />
      <meta name='twitter:description' content={DESCRIPTION} />
      <meta name='twitter:image' content={IMAGE_URL} />
    </Helmet>
  );
};

export default ReactHelmet;
