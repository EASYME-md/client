import { wrapSelection } from 'text-field-edit';

const addTypeBeforeAndAfter = (textArea, typeA, typeB = typeA) => {
  const scroll = textArea.scrollTop;

  textArea.focus();
  wrapSelection(textArea, typeA, typeB);
  textArea.scrollTop = scroll;

  return textArea.value;
};

export default addTypeBeforeAndAfter;
