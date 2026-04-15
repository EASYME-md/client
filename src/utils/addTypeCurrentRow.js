import { insert } from 'text-field-edit';

const addTypeCurrentRow = (textArea, type) => {
  const scroll = textArea.scrollTop;
  const startPosition = textArea.selectionStart;
  const beforeCursor = textArea.value.substring(0, startPosition);
  const rowStart = beforeCursor.lastIndexOf('\n') + 1;

  textArea.focus();
  textArea.setSelectionRange(rowStart, rowStart);
  insert(textArea, type);

  const newPosition = startPosition + type.length;
  textArea.setSelectionRange(newPosition, newPosition);
  textArea.scrollTop = scroll;

  return textArea.value;
};

export default addTypeCurrentRow;
