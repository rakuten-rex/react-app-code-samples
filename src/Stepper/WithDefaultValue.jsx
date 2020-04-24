import React from 'react';
import Stepper from '@rakuten-rex/stepper';

export default function MyComponent() {
  return (
    <Stepper
      id='age'
      name='name_age'
      counter={10}
      minusLabel='minus button'
      plusLabel='plus button'
    />
  );
}
