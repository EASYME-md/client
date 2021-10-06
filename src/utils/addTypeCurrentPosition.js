const addTypeCurrentPosition = (textArea, type) => {
  const currentPosition = textArea.selectionStart;
  const startText = textArea.value.substring(currentPosition, 0) + type;
  const endText = textArea.value.substring(currentPosition);

  textArea.value = startText + endText;
  textArea.focus();
  textArea.selectionEnd = currentPosition + type.length;

  return textArea.value;
};

export default addTypeCurrentPosition;
