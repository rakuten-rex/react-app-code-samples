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
          checked: false,
          disabled: true,
        },
        {
          id: 'choice2',
          name: 'setting',
          value: 'notification',
          label: 'Notification',
          checked: false,
          disabled: true,
        },
        {
          id: 'choice5',
          name: 'setting',
          value: 'onoff',
          label: 'Show lists',
          checked: false,
          disabled: true,
        },
      ]}
    />
  );
}