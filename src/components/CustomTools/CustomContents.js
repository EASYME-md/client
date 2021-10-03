import React from 'react';
import { CgListTree } from 'react-icons/cg';

const CustomContents = () => {
  return (
    <button className='ql-contents' title='Table of contents'>
      <CgListTree />
    </button>
  );
};

export function handleContents() {
  if (this.quill.getSelection()) {
    const cursorPosition = this.quill.getSelection().index;

    this.quill.insertText(cursorPosition, '\n1. [title1](#wirte-title-here!)\n2. [title2](#only-lowercase)\n3. [title3](#use"-"instead-of-spacing-words)\n4. [title4](#example)\n    - [EASYME.md가 뭐예요?](#easymemd가-뭐예요)\n    - [좀 더 구체적으로 가르쳐주세요!](#좀-더-구체적으로-가르쳐주세요)\n');
  }
};

export default CustomContents;
