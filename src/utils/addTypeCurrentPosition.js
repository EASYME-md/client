import { replace } from 'text-field-edit';

const addTypeCurrentPosition = (textArea, type) => {
  const scroll = textArea.scrollTop;
  const currentPosition = textArea.selectionStart;
  const startText = textArea.value.substring(currentPosition, 0) + type;
  const endText = textArea.value.substring(currentPosition);
  const result = startText + endText;

  replace(textArea, textArea.value, result);
  textArea.focus();
  textArea.scrollTop = scroll;
  textArea.selectionStart = currentPosition + type.length;
  textArea.selectionEnd = textArea.selectionStart;

  return textArea.value;
};

export default addTypeCurrentPosition;
