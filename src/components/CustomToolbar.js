import React from 'react';

import CustomUndo, { handleUndo } from './CustomTools/CustomUndo';
import CustomRedo, { handleRedo } from './CustomTools/CustomRedo';
import CustomHeader, { handleHeader } from './CustomTools/CustomHeader';
import CustomBold, { handleBold } from './CustomTools/CustomBold';
import CustomItalic, { handleItalic } from './CustomTools/CustomItalic';
import CustomStrikethrough, { handleStrikethrough } from './CustomTools/CustomStrikethrough';
import CustomUnderline, { handleUnderline } from './CustomTools/CustomUnderline';
import CustomHorizontalRule, { handleHorizontalRule } from './CustomTools/CustomHorizontalRule';
import CustomBlockQuote, { handleBlockQuote } from './CustomTools/CustomBlockQuote';
import CustomFold, { handleFold } from './CustomTools/CustomFold';
import CustomFirstLetterUppercase, { handleFirstLetterUppercase } from './CustomTools/CustomFirstLetterUppercase';
import CustomUppercase, { handleUppercase } from './CustomTools/CustomUppercase';
import CustomLowercase, { handleLowercase } from './CustomTools/CustomLowercase';
import CustomContents, { handleContents } from './CustomTools/CustomContents';
import CustomUnOrderedList, { handleUnOrderedList } from './CustomTools/CustomUnOrderedList';
import CustomOrderedList, { handleOrderedList } from './CustomTools/CustomOrderedList';
import CustomLink, { handleLink } from './CustomTools/CustomLink';
import CustomImageLink, { handleImageLink } from './CustomTools/CustomImageLink';
import CustomCodeInline, { handleCodeInline } from './CustomTools/CustomCodeInline';
import CustomCodeBlock, { handleCodeBlock } from './CustomTools/CustomCodeBlock';
import CustomLanguageCodeBlock, { handleLanguageCodeBlock } from './CustomTools/CustomLanguageCodeBlock';
import CustomTable, { handleTable } from './CustomTools/CustomTable';
import CustomEditorView, { handleEditorView } from './CustomTools/CustomEditorView';
import CustomPreview, { handlePreview } from './CustomTools/CustomPreview';
import CustomFullScreen, { handleFullScreen } from './CustomTools/CustomFullScreen';

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
      <CustomLanguageCodeBlock />
      <CustomTable />

      <CustomEditorView />
      <CustomPreview />
      <CustomFullScreen />

    </div>
  );
};

export const modules = {
  toolbar: {
    container: '#toolbar',
    handlers: {
      redo: handleRedo,
      undo: handleUndo,
      header: handleHeader,
      bold: handleBold,
      italic: handleItalic,
      strike: handleStrikethrough,
      underline: handleUnderline,
      'horizontal-rule': handleHorizontalRule,
      blockquote: handleBlockQuote,
      fold: handleFold,
      'first-letter-uppercase': handleFirstLetterUppercase,
    },
  },
  keyboard: {
    bindings: {
      bold: {
        key: 'B',
        shortKey: true,
        handler: handleBold,
      },
      italic: {
        key: 'I',
        shortKey: true,
        handler: handleItalic,
      },
      strike: {
        key: 'D',
        shortKey: true,
        handler: handleStrikethrough,
      },
      underline: {
        key: 'U',
        shortKey: true,
        handler: handleUnderline,
      }
    },
  },
};

export const formats = [
  'header',
];

export default CustomToolbar;
