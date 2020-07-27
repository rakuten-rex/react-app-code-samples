import React from 'react';
import FormGroup from '@rakuten-rex/form-group';

export default function MyComponent() {
  return (
    <FormGroup>
      <input type="text" defaultValue="Element1" readOnly={true} />
    </FormGroup>
  );
}
