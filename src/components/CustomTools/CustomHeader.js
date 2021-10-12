import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addText } from '../../features/slice';
import addTypeCurrentRow from '../../utils/addTypeCurrentRow';

const CustomHeader = () => {
  const dispatch = useDispatch();
  const { textArea } = useSelector((state) => state.contents);

  const handleButton = (e) => {
    const targetValue = e.target.value;
    let header = '';

    for (let i = 0; i < targetValue; i++) {
      header += '#';
    }

    header += ' ';

    const resultValue = addTypeCurrentRow(textArea, header);

    dispatch(addText(resultValue));
  };

  return (
    <select onChange={handleButton}>
      <option value={1}># Heading</option>
      <option value={2}>## Heading</option>
      <option value={3}>### Heading</option>
      <option value={4}>#### Heading</option>
      <option value={5}>##### Heading</option>
      <option value={6}>###### Heading</option>
    </select>
  );
};

export default CustomHeader;
