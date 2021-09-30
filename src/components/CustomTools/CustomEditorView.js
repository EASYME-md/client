import React from 'react';
import { VscNote } from 'react-icons/vsc';

const CustomEditorView = () => {
  return (
    <button className='ql-editor-view'>
      <VscNote fontSize={18} />
    </button>
  );
};

export function handleEditorView() {
  console.log('this is handler');
};

export default CustomEditorView;
