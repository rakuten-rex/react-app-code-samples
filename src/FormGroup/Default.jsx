import React from 'react';
import FormGroup from '@rakuten-rex/form-group';
import TextFieldLabelHelper from '@rakuten-rex/text-field/TextFieldLabelHelper';

export default function MyComponent() {
  return (
    <FormGroup>
      <TextFieldLabelHelper
        id="name01"
        name="name"
        htmlFor="name"
        label="Name"
        labelId="labelId"
      />
    </FormGroup>
  );
}
