import React from 'react';
import SwitchToggleGroup from '@rakuten-rex/switch/SwitchToggleGroup';

export default function MyComponent() {
  return (
    <SwitchToggleGroup
      options={[
        {
          id: 'choice1',
          name: 'setting',
          value: 'airplane',
          label: 'Airplane Mode',
          checked: true,
          disabled: false,
        },
        {
          id: 'choice2',
          name: 'setting',
          value: 'notification',
          label: 'Notification',
          checked: true,
          disabled: false,
        },
        {
          id: 'choice5',
          name: 'setting',
          value: 'onoff',
          label: 'Show lists',
          checked: true,
          disabled: false,
        },
      ]}
    />
  );
}