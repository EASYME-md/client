const addTypeBeforeAndAfter = (textArea, typeA, typeB = typeA) => {
  const startPosition = textArea.selectionStart;
  const endPosition = textArea.selectionEnd;
  const draggedLength = endPosition - startPosition;

  const startText = textArea.value.substring(startPosition, 0);
  const draggedText = typeA + textArea.value.substring(startPosition, endPosition) + typeB;
  const endText = textArea.value.substring(startPosition + draggedLength);

  textArea.value = startText + draggedText + endText;
  textArea.focus();
  textArea.selectionEnd = startPosition + draggedLength + typeA.length + typeB.length;

  return textArea.value;
};

export default addTypeBeforeAndAfter;
