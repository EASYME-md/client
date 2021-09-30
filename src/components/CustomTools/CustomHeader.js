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
  const cursorPosition = this.quill.getSelection()?.index;
  let header = '';

  for (let i = 0; i < content; i++) {
    header += '#';
  }

  const result = header + ' ';

  this.quill.insertText(cursorPosition, result);
  this.quill.setSelection(cursorPosition + result.length);
};

export default CustomHeader;
