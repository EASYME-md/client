import React from 'react';
import { MdSpeakerNotes, MdSpeakerNotesOff } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { toggleEditor } from '../../features/slice';

const CustomEditorView = () => {
  const dispatch = useDispatch();
  const { fullEditor } = useSelector((state) => state.contents);

  const handleButton = () => {
    dispatch(toggleEditor());
  };

  return (
    <button className='ql-editor-view' title='Only editor preview' onClick={handleButton}>
      {fullEditor
        ? <MdSpeakerNotesOff />
        : <MdSpeakerNotes />}
    </button>
  );
};

export default CustomEditorView;
