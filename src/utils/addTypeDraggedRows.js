import { replace } from 'text-field-edit';

const addTypeDraggedRows = (textArea, type) => {
  let result = '';
  let startPosition = textArea.selectionStart;
  const endPosition = textArea.selectionEnd;
  const scroll = textArea.scrollTop;
  const startRow = textArea.value.substring(0, startPosition).split('\n');
  const startRowLength = startRow[startRow.length - 1].length;
  const draggedRows = textArea.value.substring(startPosition, endPosition).split('\n');

  if (!type) {
    for (let i = 0; i < draggedRows.length; i++) {
      type = `${i + 1}. `;

      if (i === 0) {
        result = textArea.value.substring(0, startPosition - startRowLength) + type + textArea.value.substring(startPosition - startRowLength);

        startPosition += type.length;
        continue;
      }

      const nextRow = draggedRows[i - 1].length + 1;
      startPosition += nextRow;
      result = result.substring(0, startPosition) + type + result.substring(startPosition);
      startPosition += type.length;
    }
  } else {
    for (let i = 0; i < draggedRows.length; i++) {
      if (i === 0) {
        result = textArea.value.substring(0, startPosition - startRowLength) + type + textArea.value.substring(startPosition - startRowLength);

        startPosition += type.length;
        continue;
      }

      const nextRow = draggedRows[i - 1].length + 1;
      startPosition += nextRow;
      result = result.substring(0, startPosition) + type + result.substring(startPosition);
      startPosition += type.length;
    }
  }

  replace(textArea, textArea.value, result);
  textArea.focus();
  textArea.scrollTop = scroll;
  textArea.selectionStart = startPosition;
  textArea.selectionEnd = textArea.selectionStart;

  return textArea.value;
};

export default addTypeDraggedRows;
