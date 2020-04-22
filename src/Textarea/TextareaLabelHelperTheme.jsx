import React from 'react';
import TextareaLabelHelper from '@rakuten-rex/textarea';

export default function MyComponent() {
  return (
    <TextareaLabelHelper
      style={{
        "--rex-textarea-theme-border": "#CB0085",
        "--rex-textarea-theme-placeholder": "#EF0AA1",
        "--rex-textarea-theme-text": "#A2006A",
        "--rex-textarea-theme-disabled-border": "#686868",
        "--rex-textarea-theme-disabled-placeholder": "#828282",
        "--rex-textarea-theme-disabled-text": "#4D4D4D",
        "--rex-textarea-theme-hover-border": "#A2006A",
        "--rex-textarea-theme-hover-placeholder": "#CB0085",
        "--rex-textarea-theme-hover-text": "#830056",
        "--rex-textarea-theme-active-border": "#830056",
        "--rex-textarea-theme-active-placeholder": "#A2006A",
        "--rex-textarea-theme-active-text": "#5A003C",
        "--rex-textarea-theme-error-border": "#9B00EC",
        "--rex-textarea-theme-error-placeholder": "#B62AFF",
        "--rex-textarea-theme-error-text": "#7D00BE",
        "--rex-textarea-theme-valid-border": "#0085C7",
        "--rex-textarea-theme-valid-placeholder": "#00A0F0",
        "--rex-textarea-theme-valid-text": "#006A9E",
        "--rex-textarea-label-theme-text": "#CB0085",
        "--rex-textarea-label-theme-hover-text": "#A2006A",
        "--rex-textarea-label-theme-active-text": "#830056",
        "--rex-textarea-label-theme-error-text": "#9B00EC",
        "--rex-textarea-label-theme-valid-text": "#0085C7",
        "--rex-textarea-label-theme-disabled-text": "#686868",
        "--rex-textarea-helper-theme-text": "#686868",
        "--rex-textarea-helper-theme-hover-text": "#4D4D4D",
        "--rex-textarea-helper-theme-active-text": "#333333",
        "--rex-textarea-helper-theme-error-text": "#9B00EC",
        "--rex-textarea-helper-theme-valid-text": "#0085C7",
        "--rex-textarea-helper-theme-disabled-text": "#686868"
      }}
      placeholder='Placeholder'
      label='Label'
      helper='Helper Text'
      id='age'
      htmlFor='age'
      labelId='labelId'
      state='valid'
    />
  );
}
