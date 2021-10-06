import { replace } from 'text-field-edit';

const addTypeCurrentRow = (textArea, type) => {
  const startPosition = textArea.selectionStart;
  const currentRow = textArea.value.substring(0, startPosition).split('\n');
  const currentRowLength = currentRow[currentRow.length - 1].length;

  const startText = textArea.value.substring(0, startPosition - currentRowLength);
  const endText = type + textArea.value.substring(startPosition - currentRowLength);
  const result = startText + endText;

  replace(textArea, textArea.value, result);
  textArea.focus();
  textArea.selectionStart = startPosition - currentRowLength + type.length;
  textArea.selectionEnd = textArea.selectionStart;

  return textArea.value;
};

export default addTypeCurrentRow;
