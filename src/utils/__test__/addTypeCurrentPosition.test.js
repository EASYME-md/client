/** * @jest-environment jsdom */
import { unmountComponentAtNode } from 'react-dom';
import '@testing-library/jest-dom';

import addTypeCurrentPosition from "../addTypeCurrentPosition";

let textArea = null;

beforeEach(() => {
  document.execCommand = jest.fn();
  textArea = document.createElement('textarea');
  document.body.appendChild(textArea);
  textArea.textContent = 'EASYME.md입니다.';
});

afterEach(() => {
  unmountComponentAtNode(textArea);
  textArea.remove();
  textArea = null;
  document.execCommand = null;
});

test('addTypeCurrentPosition Test', () => {
  expect(addTypeCurrentPosition(textArea, '현재 텍스트 뒤에 추가되는 것은 ')).toBe('현재 텍스트 뒤에 추가되는 것은 EASYME.md입니다.');
});
