import React from 'react';
import { VscNote } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';

import { toggleEditor } from '../../features/slice';

const CustomEditorView = () => {
  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(toggleEditor());
  };

  return (
    <button className='ql-editor-view' title='Only editor preview' onClick={handleButton}>
      <VscNote />
    </button>
  );
};

export default CustomEditorView;
