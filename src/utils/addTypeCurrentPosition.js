import { insert } from 'text-field-edit';

const addTypeCurrentPosition = (textArea, type) => {
  const scroll = textArea.scrollTop;

  textArea.focus();
  insert(textArea, type);
  textArea.scrollTop = scroll;

  return textArea.value;
};

export default addTypeCurrentPosition;
