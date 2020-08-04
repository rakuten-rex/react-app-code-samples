import React from 'react';
import FormGroup from '@rakuten-rex/form-group';
import TextFieldLabelHelper from '@rakuten-rex/text-field/TextFieldLabelHelper';

export default function MyComponent() {
  return (
    <>
      <FormGroup mb={6}>
        <TextFieldLabelHelper
          name="firstName1"
          htmlFor="firstName1"
          label="First Name"
        />
      </FormGroup>
      <FormGroup mb={6}>
        <TextFieldLabelHelper
          name="lastName1"
          htmlFor="lastName1"
          label="Last Name"
        />
      </FormGroup>
      <FormGroup>
        <FormGroup mb={6}>
          <TextFieldLabelHelper name="email" htmlFor="email" label="Email" />
        </FormGroup>
        <FormGroup mb={6}>
          <TextFieldLabelHelper
            name="password"
            htmlFor="password"
            label="Password"
          />
        </FormGroup>
      </FormGroup>
    </>
  );
}
