import React from 'react';
import FormGroup from '@rakuten-rex/form-group';
import TextFieldLabelHelper from '@rakuten-rex/text-field/TextFieldLabelHelper';

export default function MyComponent() {
  return (
    <>
      <FormGroup mb={6}>
        <FormGroup row={true} mr={6} mb={6}>
          <TextFieldLabelHelper
            name="firstName"
            htmlFor="firstName"
            label="First Name"
          />
        </FormGroup>
        <FormGroup row={true} mb={6}>
          <TextFieldLabelHelper
            name="lastName"
            htmlFor="lastName"
            label="Last Name"
          />
        </FormGroup>
        <FormGroup mb={6}>
          <TextFieldLabelHelper name="email" htmlFor="email" label="Email" />
        </FormGroup>
        <FormGroup mb={6}>
          <TextFieldLabelHelper
            name="address"
            htmlFor="address"
            label="Address"
          />
        </FormGroup>
      </FormGroup>
    </>
  );
}
