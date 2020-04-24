import React from 'react';
import CheckboxGroup from '@rakuten-rex/checkbox/CheckboxGroup';

export default function MyComponent() {
  return (
    <CheckboxGroup
      options={[
        {
          id: 'choice1',
          name: 'pet',
          value: 'dog',
          label: 'Dog',
          checked: true,
          disabled: false,
          required: false,
        },
        {
          id: 'choice2',
          name: 'pet',
          value: 'fish',
          label: 'Fish',
          checked: false,
          disabled: false,
          required: false,
        },
        {
          id: 'choice3',
          name: 'pet',
          value: 'cat',
          label: 'Cat',
          checked: false,
          disabled: false,
          required: false,
        },
        {
          id: 'choice4',
          name: 'pet',
          value: 'llama',
          label: 'Llama',
          checked: false,
          disabled: false,
          required: false,
        },
        {
          id: 'choice5',
          name: 'pet',
          value: 'iguana',
          label: 'Iguana',
          checked: false,
          disabled: true,
          required: false,
        },
      ]}
      style={{
        '--rex-checkbox-theme': '#CB0085',
        '--rex-checkbox-border': '#830056',
        '--rex-checkbox-label': '#A2006A',
        '--rex-checkbox-checked-label': '#5A003C',
        '--rex-checkbox-checked-border': '#CB0085',
        '--rex-checkbox-disabled-label': '#828282',
        '--rex-checkbox-disabled-border': '#686868',
        '--rex-checkbox-margin-top': '.5rem',
        '--rex-checkbox-margin-right': '3rem',
        '--rex-checkbox-margin-bottom': '.5rem',
        '--rex-checkbox-margin-left': '0rem',
      }}
    />
  );
}
