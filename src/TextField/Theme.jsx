import React from 'react';
import TextFieldLabel from '@rakuten-rex/text-field';

export default function MyComponent() {
  return (
    <TextFieldLabel
      style={{
        '--rex-text-field-theme-text': '#A2006A',
        '--rex-text-field-theme-border': '#CB0085',
        '--rex-text-field-theme-placeholder': '#EF0AA1',
        '--rex-text-field-theme-hover-text': '#830056',
        '--rex-text-field-theme-hover-border': '#A2006A',
        '--rex-text-field-theme-hover-placeholder': '#CB0085',
        '--rex-text-field-theme-active-text': '#5A003C',
        '--rex-text-field-theme-active-border': '#830056',
        '--rex-text-field-theme-active-placeholder': '#A2006A',
        '--rex-text-field-theme-disabled-border': '#686868',
        '--rex-text-field-theme-disabled-placeholder': '#828282',
        '--rex-text-field-theme-disabled-text': '#4D4D4D',
        '--rex-text-field-theme-error-text': '#7D00BE',
        '--rex-text-field-theme-error-border': '#9B00EC',
        '--rex-text-field-theme-error-placeholder': '#B62AFF',
        '--rex-text-field-theme-error-icon-color': '#9B00EC',
        '--rex-text-field-theme-valid-text': '#006A9E',
        '--rex-text-field-theme-valid-border': '#0085C7',
        '--rex-text-field-theme-valid-placeholder': '#00A0F0',
        '--rex-text-field-theme-valid-icon-color': '#006A9E',
        '--rex-text-field-label-theme-text': '#CB0085',
        '--rex-text-field-label-theme-disabled-text': '#686868',
        '--rex-text-field-label-theme-hover-text': '#A2006A',
        '--rex-text-field-label-theme-active-text': '#830056',
        '--rex-text-field-label-theme-error-text': '#9B00EC',
        '--rex-text-field-label-theme-valid-text': '#0085C7',
      }}
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
    />
  );
}
