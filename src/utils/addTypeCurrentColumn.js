import { replace } from 'text-field-edit';

const addTypeCurrentColumn = (textArea, type) => {
  const startPosition = textArea.selectionStart;
  const currentColumn = textArea.value.substring(0, startPosition).split('\n');
  const currentColumnLength = currentColumn[currentColumn.length - 1].length;

  const startText = textArea.value.substring(0, startPosition - currentColumnLength);
  const endText = type + textArea.value.substring(startPosition - currentColumnLength);
  const result = startText + endText;

  replace(textArea, textArea.value, result);
  textArea.focus();
  textArea.selectionStart = startPosition - currentColumnLength + type.length;
  textArea.selectionEnd = textArea.selectionStart;

  return textArea.value;
};

export default addTypeCurrentColumn;
