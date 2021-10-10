import React from 'react';
import styled from '@emotion/styled';

import CustomUndo from './CustomTools/CustomUndo';
import CustomRedo from './CustomTools/CustomRedo';
import CustomHeader from './CustomTools/CustomHeader';
import CustomBold from './CustomTools/CustomBold';
import CustomItalic from './CustomTools/CustomItalic';
import CustomStrikethrough from './CustomTools/CustomStrikethrough';
import CustomUnderline from './CustomTools/CustomUnderline';
import CustomHorizontalRule from './CustomTools/CustomHorizontalRule';
import CustomBlockQuote from './CustomTools/CustomBlockQuote';
import CustomFold from './CustomTools/CustomFold';
import CustomFirstLetterUppercase from './CustomTools/CustomFirstLetterUppercase';
import CustomUppercase from './CustomTools/CustomUppercase';
import CustomLowercase from './CustomTools/CustomLowercase';
import CustomContents from './CustomTools/CustomContents';
import CustomUnOrderedList from './CustomTools/CustomUnOrderedList';
import CustomOrderedList from './CustomTools/CustomOrderedList';
import CustomLink from './CustomTools/CustomLink';
import CustomImageLink from './CustomTools/CustomImageLink';
import CustomCodeInline from './CustomTools/CustomCodeInline';
import CustomCodeBlock from './CustomTools/CustomCodeBlock';
import CustomTable from './CustomTools/CustomTable';
import CustomEditorView from './CustomTools/CustomEditorView';
import CustomMarkdownView from './CustomTools/CustomMarkdownView';
import CustomFullScreen from './CustomTools/CustomFullScreen';
import CustomShare from './CustomTools/CustomShare';
import SectionLine from './shared/SectionLine';

const CustomToolbar = () => {
  return (
    <ToolbarWrapper>
      <CustomRedo />
      <CustomUndo />
      <SectionLine />
      <CustomHeader />
      <SectionLine />
      <CustomBold />
      <CustomItalic />
      <CustomStrikethrough />
      <CustomUnderline />
      <CustomHorizontalRule />
      <CustomBlockQuote />
      <CustomFold />
      <SectionLine />
      <CustomFirstLetterUppercase />
      <CustomUppercase />
      <CustomLowercase />
      <SectionLine />
      <CustomContents />
      <CustomUnOrderedList />
      <CustomOrderedList />
      <CustomLink />
      <CustomImageLink />
      <CustomCodeInline />
      <CustomCodeBlock />
      <CustomTable />
      <SectionLine />
      <CustomEditorView />
      <CustomMarkdownView />
      <CustomFullScreen />
      <SectionLine />
      <CustomShare />
    </ToolbarWrapper>
  );
};

const ToolbarWrapper = styled.div`
  button {
    cursor: pointer;
    vertical-align: middle;
    border: none;
    background: none;
  }

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }

  select {
    font-weight: 600;
    font-family: inherit;
    padding: 3px;
    width: 120px;
    border: 1px solid #dddddd;

    :focus {
      outline: none;
    }
  }
`;

export default CustomToolbar;
