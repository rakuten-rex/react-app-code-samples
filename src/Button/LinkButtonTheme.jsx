import React from 'react';
import LinkButton from '@rakuten-rex/button/LinkButton';

export default function MyComponent() {
  return (
    <LinkButton
      style={{
        '--rex-button-theme-background': 'transparent',
        '--rex-button-theme-text': '#CB0085',
        '--rex-button-theme-border': 'transparent',
        '--rex-button-theme-hover-background': '#EBEBEB',
        '--rex-button-theme-hover-text': '#EF0AA1',
        '--rex-button-theme-hover-border': '#EBEBEB',
        '--rex-button-theme-active-background': '#EBEBEB',
        '--rex-button-theme-active-text': '#A2006A',
        '--rex-button-theme-active-border': '#EBEBEB',
        '--rex-button-theme-focus-background': 'transparent',
        '--rex-button-theme-focus-text': '#EF0AA1',
        '--rex-button-theme-focus-border': 'transparent',
        '--rex-button-border-radius': '0.25rem',
        '--rex-button-padding-top-bottom': '0.75rem',
        '--rex-button-padding-left-right': '2rem',
        '--rex-button-min-width': '12.5rem',
      }}
    >
      Click me
    </LinkButton>
  );
}
