import React from 'react';
import PillButton from '@rakuten-rex/button/PillButton';

export default function MyComponent() {
  return (
    <PillButton
      style={{
        '--rex-button-theme-background': '#CB0085',
        '--rex-button-theme-text': '#fff',
        '--rex-button-theme-border': '#CB0085',
        '--rex-button-theme-hover-background': '#EF0AA1',
        '--rex-button-theme-hover-text': '#fff',
        '--rex-button-theme-hover-border': '#EF0AA1',
        '--rex-button-theme-active-background': '#A2006A',
        '--rex-button-theme-active-text': '#fff',
        '--rex-button-theme-active-border': '#A2006A',
        '--rex-button-theme-focus-background': '#A2006A',
        '--rex-button-theme-focus-text': '#fff',
        '--rex-button-theme-focus-border': '#A2006A',
        '--rex-button-border-radius': '2.5rem',
        '--rex-button-padding-top-bottom': '0.75rem',
        '--rex-button-padding-left-right': '2rem',
        '--rex-button-min-width': '12.5rem',
      }}
    >
      Click me
    </PillButton>
  );
}
