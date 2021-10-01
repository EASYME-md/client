import React from 'react';

const CustomImageLink = () => {
  return (
    <button className='ql-image' title='image' />
  );
};

export function handleImageLink(value) {
  const cursorPosition = this.quill.getSelection()?.index;
  const offset = this.quill.selection.getRange()[1].start.offset;
  const startingPosition = cursorPosition - offset;
  const link = prompt('Enter the Image URL', 'http://');

  if (value && link) {
    this.quill.format('link', link);
    this.quill.insertText(startingPosition, `![title](${link})   \n`);
  } else {
    this.quill.format('link', false);
  }
};

export default CustomImageLink;
