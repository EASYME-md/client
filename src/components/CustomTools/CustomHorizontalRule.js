import React from 'react';
import { AiOutlineLine } from 'react-icons/ai';

const CustomHorizontalRule = () => {
  return (
    <button className='ql-horizontal-rule' title='Horizontal rule'>
      <AiOutlineLine fontSize={18} />
    </button>
  );
};

export function handleHorizontalRule() {
  if (this.quill.getSelection()) {
    const cursorPosition = this.quill.getSelection().index;

    this.quill.insertText(cursorPosition, '\n---\n');
  }
};

export default CustomHorizontalRule;
