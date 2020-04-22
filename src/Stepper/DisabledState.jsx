import React from 'react';
import Stepper from '@rakuten-rex/stepper';

export default function MyComponent() {
  return (
    <Stepper 
      id='defaultId'
      name='name_age'
      minusLabel='minus button'
      plusLabel='plus button'
      disabled={true}
      state='disabled'
    />
  );
}
