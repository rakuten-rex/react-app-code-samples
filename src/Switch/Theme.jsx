import React from 'react';
import SwitchToggle from '@rakuten-rex/switch';

export default function MyComponent() {
  return (
    <SwitchToggle
      style={{
        '--rex-switch-default': '#830056',
        '--rex-switch-theme': '#CB0085',
        '--rex-switch-label': '#A2006A',
        '--rex-switch-checked-label': '#5A003C',
        '--rex-switch-disabled-background': '#686868',
        '--rex-switch-disabled-label': '#828282',
        '--rex-switch-margin-top': '.5rem',
        '--rex-switch-margin-right': '3rem',
        '--rex-switch-margin-bottom': '.5rem',
        '--rex-switch-margin-left': '0rem',
        '--rex-switch-label-margin-left': '.5rem',
        '--rex-switch-label-margin-right': '.5rem',
      }}
      id="switchMode"
      label="Label Text"
      name="Airplane mode"
      value="off"
    />
  );
}
