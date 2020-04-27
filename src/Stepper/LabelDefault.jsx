import React from 'react';
import StepperLabel from '@rakuten-rex/stepper/StepperLabel';

export default function MyComponent() {
  return (
    <StepperLabel
      label="Label"
      id="age"
      name="name_age"
      labelId="labelId"
      minusLabel="minus button"
      plusLabel="plus button"
    />
  );
}
