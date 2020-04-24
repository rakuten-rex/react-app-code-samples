import React from 'react';
import RadioGroup from '@rakuten-rex/radio-button';

export default function MyComponent() {
  return (
    <RadioGroup 
      options={[
        { "id": "choice1", "name": "state", "value": "default", "label": "Default", "checked": false, "disabled": false, "required": false }, 
        { "id": "choice2", "name": "state", "value": "checked", "label": "Checked", "checked": true, "disabled": false, "required": false }, 
        { "id": "choice3", "name": "state", "value": "disabled", "label": "Disabled", "checked": false, "disabled": true, "required": false }]}
      style={{
        "--rex-radio-theme": "#CB0085",
        "--rex-radio-label": "#A2006A",
        "--rex-radio-border": "#830056",
        "--rex-radio-checked-label": "#5A003C",
        "--rex-radio-checked-border": "#CB0085",
        "--rex-radio-disabled-label": "#828282",
        "--rex-radio-disabled-border": "#686868",
        "--rex-radio-margin-top": ".5rem",
        "--rex-radio-margin-right": "3rem",
        "--rex-radio-margin-bottom": ".5rem",
        "--rex-radio-margin-left": "0rem"
      }} 
    />
  );
}
