import React from 'react';

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

const CustomToolbar = () => {
  return (
    <div id="toolbar">
      <CustomRedo />
      <CustomUndo />

      <CustomHeader />
      <CustomBold />
      <CustomItalic />
      <CustomStrikethrough />
      <CustomUnderline />
      <CustomHorizontalRule />
      <CustomBlockQuote />
      <CustomFold />
      <CustomFirstLetterUppercase />
      <CustomUppercase />
      <CustomLowercase />

      <CustomContents />
      <CustomUnOrderedList />
      <CustomOrderedList />
      <CustomLink />
      <CustomImageLink />
      <CustomCodeInline />
      <CustomCodeBlock />
      <CustomTable />

      <CustomEditorView />
      <CustomMarkdownView />
      <CustomFullScreen />
    </div>
  );
};

export default CustomToolbar;
