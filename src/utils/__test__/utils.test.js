/** * @jest-environment jsdom */
import { unmountComponentAtNode } from 'react-dom';

import addTypeCurrentPosition from '../addTypeCurrentPosition';
import addTypeBeforeAndAfter from '../addTypeBeforeAndAfter';
import addTypeCrrentRow from '../addTypeCurrentRow';
import addTypeDraggedRows from '../addTypeDraggedRows';

let textArea = null;

beforeEach(() => {
  document.execCommand = jest.fn();
  textArea = document.createElement('textarea');
  document.body.appendChild(textArea);
  textArea.textContent = 'EASYME.md입니다.';
  textArea.selectionStart = 0;
  textArea.selectionEnd = 9;
});

afterEach(() => {
  unmountComponentAtNode(textArea);
  textArea.remove();
  textArea = null;
});

describe('utils function', () => {
  it('01. addTypeCurrentPosition test', () => {
    expect(addTypeCurrentPosition(textArea, '현재 텍스트 뒤에 추가되는 것은 ')).toEqual('현재 텍스트 뒤에 추가되는 것은 EASYME.md입니다.');
  });

  it('02. addTypeBeforeAndAfter test', () => {
    expect(addTypeBeforeAndAfter(textArea, '**')).toEqual('**EASYME.md**입니다.');
  });

  it('03. addTypeCrrentRow test', () => {
    expect(addTypeCrrentRow(textArea, '- ')).toEqual('- EASYME.md입니다.');
  });

  it('04. addTypeDraggedRows test', () => {
    textArea.textContent = 'EASYME.md입니다.\n쉽고 빠르게 리드미를 작성해보세요!';
    textArea.selectionEnd = 34;

    expect(addTypeDraggedRows(textArea, '- ')).toEqual('- EASYME.md입니다.\n- 쉽고 빠르게 리드미를 작성해보세요!');
  });
});
