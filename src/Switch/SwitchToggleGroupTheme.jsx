import React from 'react';
import SwitchToggleGroup from '@rakuten-rex/switch/SwitchToggleGroup';

export default function MyComponent() {
  return (
    <SwitchToggleGroup
      options={[
        {
          id: 'choice1',
          name: 'setting',
          value: 'default',
          label: 'Default',
          checked: false,
          disabled: false,
        },
        {
          id: 'choice2',
          name: 'setting',
          value: 'checked',
          label: 'Checked',
          checked: true,
          disabled: false,
        },
        {
          id: 'choice3',
          name: 'setting',
          value: 'disabled',
          label: 'Disabled',
          checked: false,
          disabled: true,
        },
        {
          id: 'choice4',
          name: 'setting',
          value: 'leftPosition',
          label: 'Left Postion Label',
          checked: false,
          disabled: false,
          labelPosition: true,
        },
      ]}
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
    />
  );
}