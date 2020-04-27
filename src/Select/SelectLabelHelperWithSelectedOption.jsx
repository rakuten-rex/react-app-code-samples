import React from 'react';
import SelectLabelHelper from '@rakuten-rex/select/SelectLabelHelper';

export default function MyComponent() {
  return (
    <SelectLabelHelper
      id="age"
      label="Label"
      helper="Helper Text"
      placeholder="Placeholder"
      options={[
        { text: 'Option 1', value: 'option_1' },
        { text: 'Option 2', value: 'option_2' },
        { text: 'Option 3', value: 'option_3' },
      ]}
      htmlFor="age"
      selectedIndex={2}
    />
  );
}
