const addTypeCurrentColumn = (textArea, type) => {
  const startPosition = textArea.selectionStart;
  const currentColumn = textArea.value.substring(0, startPosition).split('\n');
  const currentColumnLength = currentColumn[currentColumn.length - 1].length;

  const startText = textArea.value.substring(0, startPosition - currentColumnLength);
  const endText = type + textArea.value.substring(startPosition - currentColumnLength);

  textArea.value = startText + endText;
  textArea.focus();
  textArea.selectionEnd = startPosition - currentColumnLength + type.length;

  return textArea.value;
};

export default addTypeCurrentColumn;
