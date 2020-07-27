import React from 'react';
import FormGroup from '@rakuten-rex/form-group';

export default function MyComponent() {
  return (
    <FormGroup m={1}>
      <FormGroup row={true} mr={3}>
        <input type="text" defaultValue="Element1" readOnly={true} />
      </FormGroup>
      <FormGroup row={true} mr={3}>
        <input type="text" defaultValue="Element2" readOnly={true} />
      </FormGroup>
      <FormGroup row={true}>
        <input type="text" defaultValue="Element3" readOnly={true} />
      </FormGroup>
    </FormGroup>
  );
}
