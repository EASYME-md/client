import React from 'react';
import { MdSpeakerNotes, MdSpeakerNotesOff } from 'react-icons/md';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { toggleEditor } from '../../features/slice';

const CustomEditorView = () => {
  const dispatch = useDispatch();
  const { fullEditor } = useSelector((state) => state.contents, shallowEqual);

  const handleButton = () => {
    dispatch(toggleEditor());
  };

  return (
    <button title='Only editor preview' onClick={handleButton}>
      {fullEditor
        ? <MdSpeakerNotesOff />
        : <MdSpeakerNotes />}
    </button>
  );
};

export default CustomEditorView;
