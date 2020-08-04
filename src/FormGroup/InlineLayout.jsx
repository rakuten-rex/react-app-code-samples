import React from 'react';
import FormGroup from '@rakuten-rex/form-group';
import TextFieldLabelHelper from '@rakuten-rex/text-field/TextFieldLabelHelper';

export default function MyComponent() {
  return (
    <>
      <FormGroup row={true} mr={6}>
        <TextFieldLabelHelper
          id="dog"
          name="element1"
          htmlFor="element1"
          label="Label1"
        />
      </FormGroup>
      <FormGroup row={true} mr={6}>
        <TextFieldLabelHelper
          id="cat"
          name="element2"
          htmlFor="element2"
          label="Label2"
        />
      </FormGroup>
      <FormGroup row={true}>
        <TextFieldLabelHelper
          id="horse"
          name="element3"
          htmlFor="element3"
          label="Label3"
        />
      </FormGroup>
    </>
  );
}
