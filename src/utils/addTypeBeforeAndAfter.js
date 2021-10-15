import { replace } from 'text-field-edit';

const addTypeBeforeAndAfter = (textArea, typeA, typeB = typeA) => {
  const scroll = textArea.scrollTop;
  const startPosition = textArea.selectionStart;
  const endPosition = textArea.selectionEnd;
  const draggedLength = endPosition - startPosition;

  const startText = textArea.value.substring(startPosition, 0);
  const draggedText = typeA + textArea.value.substring(startPosition, endPosition) + typeB;
  const endText = textArea.value.substring(startPosition + draggedLength);
  const result = startText + draggedText + endText;

  replace(textArea, textArea.value, result);
  textArea.focus();
  textArea.scrollTop = scroll;
  textArea.selectionStart = startPosition + draggedLength + typeA.length + typeB.length;
  textArea.selectionEnd = textArea.selectionStart;

  return textArea.value;
};

export default addTypeBeforeAndAfter;
