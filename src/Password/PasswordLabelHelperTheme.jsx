import React from 'react';
import PasswordLabelHelper from '@rakuten-rex/password/PasswordLabelHelper';

export default function MyComponent() {
  return (
    <PasswordLabelHelper
      style={{
        "--rex-password-theme-text": "#A2006A",
        "--rex-password-theme-border": "#CB0085",
        "--rex-password-theme-placeholder": "#EF0AA1",
        "--rex-password-theme-hover-text": "#830056",
        "--rex-password-theme-hover-border": "#A2006A",
        "--rex-password-theme-hover-placeholder": "#CB0085",
        "--rex-password-theme-active-text": "#5A003C",
        "--rex-password-theme-active-border": "#830056",
        "--rex-password-theme-active-placeholder": "#A2006A",
        "--rex-password-theme-disabled-border": "#686868",
        "--rex-password-theme-disabled-placeholder": "#828282",
        "--rex-password-theme-disabled-text": "#4D4D4D",
        "--rex-password-theme-error-text": "#7D00BE",
        "--rex-password-theme-error-border": "#9B00EC",
        "--rex-password-theme-error-placeholder": "#B62AFF",
        "--rex-password-theme-valid-text": "#006A9E",
        "--rex-password-theme-valid-border": "#0085C7",
        "--rex-password-theme-valid-placeholder": "#00A0F0",
        "--rex-password-theme-icon": "#686868",
        "--rex-password-theme-hover-icon": "#4D4D4D",
        "--rex-password-theme-active-icon": "#686868",
        "--rex-password-theme-error-icon": "#65009A",
        "--rex-password-theme-valid-icon": "#004E76",
        "--rex-password-label-theme-text": "#CB0085",
        "--rex-password-label-theme-hover-text": "#A2006A",
        "--rex-password-label-theme-active-text": "#830056",
        "--rex-password-label-theme-error-text": "#9B00EC",
        "--rex-password-label-theme-valid-text": "#0085C7",
        "--rex-password-label-theme-disabled-text": "#686868",
        "--rex-password-helper-theme-text": "#686868",
        "--rex-password-helper-theme-hover-text": "#4D4D4D",
        "--rex-password-helper-theme-active-text": "#333333",
        "--rex-password-helper-theme-error-text": "#9B00EC",
        "--rex-password-helper-theme-valid-text": "#0085C7",
        "--rex-password-helper-theme-disabled-text": "#686868"
      }}
      placeholder='Password'
      htmlFor='password'
      label='Label'
      labelId='labelId'
      helper='Helper Text'
      name='Password'
      value='Default Value'
    />
  );
}
