import React from 'react';
import Stepper from '@rakuten-rex/stepper';

export default function MyComponent() {
  return (
    <Stepper
      id='age'
      name='name_age'
      minusLabel='minus button'
      plusLabel='plus button'
      state='null'
      style={{
        "--rex-stepper-theme-number-text": "#A2006A",
        "--rex-stepper-theme-button": "#FFE9F8",
        "--rex-stepper-theme-background": "#FFE9F8",
        "--rex-stepper-theme-default-icon": "#CB0085",
        "--rex-stepper-theme-hover-button": "#CB0085",
        "--rex-stepper-theme-hover-icon": "#FFDAF2",
        "--rex-stepper-theme-active-button": "#CB0085",
        "--rex-stepper-theme-active-icon": "#FFDAF2",
        "--rex-stepper-theme-disabled-icon": "#686868",
        "--rex-stepper-theme-disabled-button": "#9C9C9C",
        "--rex-stepper-theme-disabled-input-text": "#686868",
        "--rex-stepper-theme-disabled-input-background": "#9C9C9C",
        "--rex-stepper-theme-margin-top": ".5rem",
        "--rex-stepper-theme-margin-right": "3rem",
        "--rex-stepper-theme-margin-bottom": ".5rem",
        "--rex-stepper-theme-margin-left": "0rem"
    }} />
  );
}
