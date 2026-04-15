import { insert } from 'text-field-edit';

const addTypeDraggedRows = (textArea, type) => {
  const scroll = textArea.scrollTop;
  const selStart = textArea.selectionStart;
  const selEnd = textArea.selectionEnd;
  const value = textArea.value;

  const beforeSelection = value.substring(0, selStart);
  const firstRowStart = beforeSelection.lastIndexOf('\n') + 1;

  const affectedText = value.substring(firstRowStart, selEnd);
  const rows = affectedText.split('\n');

  const prefixedRows = type
    ? rows.map((row) => type + row)
    : rows.map((row, i) => `${i + 1}. ${row}`);
  const newText = prefixedRows.join('\n');

  textArea.focus();
  textArea.setSelectionRange(firstRowStart, selEnd);
  insert(textArea, newText);

  const lengthDiff = newText.length - affectedText.length;
  textArea.setSelectionRange(selStart + (type ? type.length : '1. '.length), selEnd + lengthDiff);
  textArea.scrollTop = scroll;

  return textArea.value;
};

export default addTypeDraggedRows;
