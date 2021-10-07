import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const SectionLine = () => {
  return (
    <span css={line}></span>
  );
};

const line = css`
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  margin-right: 5px;
  border-left: 1px solid #dddddd;
  height: 25px;
`;

export default SectionLine;
