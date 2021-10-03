import React from 'react';

const CustomHeader = () => {
  return (
    <select className='ql-header'>
      <option value="1"># Heading</option>
      <option value="2">## Heading</option>
      <option value="3">### Heading</option>
      <option value="4">#### Heading</option>
      <option value="5">##### Heading</option>
      <option value="6">###### Heading</option>
    </select>
  );
};

export function handleHeader(content) {
  if (this.quill.getSelection()) {
    const cursorPosition = this.quill.getSelection().index;
    const offset = this.quill.selection.getRange()[1].start.offset;
    const startingPosition = cursorPosition - offset;

    let header = '';

    for (let i = 0; i < content; i++) {
      header += '#';
    }

    const result = header + ' ';

    this.quill.insertText(startingPosition, result);
  }
};

export default CustomHeader;
