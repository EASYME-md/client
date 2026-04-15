import React from 'react';
import { FaListOl } from 'react-icons/fa';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { addText } from '../../features/slice';
import addTypeDraggedRows from '../../utils/addTypeDraggedRows';

const CustomOrderedList = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents, shallowEqual);

  const handleButton = () => {
    const resultValue = addTypeDraggedRows(textArea, false);

    dispatch(addText(resultValue));
  };

  return (
    <button title='Ordered list' onClick={handleButton}>
      <FaListOl />
    </button>
  );
};

export default CustomOrderedList;
