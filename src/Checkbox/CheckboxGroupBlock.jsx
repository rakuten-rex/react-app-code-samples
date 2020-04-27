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
      isBlock={true}
    />
  );
}
