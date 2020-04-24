import React from 'react';
import SelectLabel from '@rakuten-rex/select';

export default function MyComponent() {
  return (
    <SelectLabel
      style={{
        '--rex-select-theme-text': '#A2006A',
        '--rex-select-theme-border': '#CB0085',
        '--rex-select-theme-placeholder': '#EF0AA1',
        '--rex-select-theme-hover-text': '#830056',
        '--rex-select-theme-hover-border': '#A2006A',
        '--rex-select-theme-hover-placeholder': '#CB0085',
        '--rex-select-theme-active-text': '#5A003C',
        '--rex-select-theme-active-border': '#830056',
        '--rex-select-theme-active-placeholder': '#A2006A',
        '--rex-select-theme-disabled-border': '#686868',
        '--rex-select-theme-disabled-placeholder': '#828282',
        '--rex-select-theme-disabled-text': '#4D4D4D',
        '--rex-select-theme-error-text': '#7D00BE',
        '--rex-select-theme-error-border': '#9B00EC',
        '--rex-select-theme-error-placeholder': '#B62AFF',
        '--rex-select-theme-valid-text': '#006A9E',
        '--rex-select-theme-valid-border': '#0085C7',
        '--rex-select-theme-valid-placeholder': '#00A0F0',
        '--rex-select-label-theme-text': '#CB0085',
        '--rex-select-label-theme-hover-text': '#A2006A',
        '--rex-select-label-theme-active-text': '#830056',
        '--rex-select-label-theme-disabled-text': '#686868',
        '--rex-select-label-theme-error-text': '#9B00EC',
        '--rex-select-label-theme-valid-text': '#0085C7',
      }}
      id="age"
      label="Label"
      placeholder="Placeholder"
      options={[
        { text: 'Option 1', value: 'option_1' },
        { text: 'Option 2', value: 'option_2' },
        { text: 'Option 3', value: 'option_3' },
      ]}
      htmlFor="age"
      selectedIndex={2}
    />
  );
}
