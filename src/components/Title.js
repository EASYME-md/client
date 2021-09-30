import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Title = () => {
  return (
    <div css={title}>
      EASYME.md
    </div>
  );
};

const title = css`
  margin-top: 3rem;
  text-align: center;
  color: goldenrod;
  font-size: 4rem;
`;

export default Title;
