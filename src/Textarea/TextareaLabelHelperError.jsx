import React from 'react';
import TextareaLabelHelper from '@rakuten-rex/textarea';

export default function MyComponent() {
  return (
    <TextareaLabelHelper
      placeholder='Placeholder'
      label='Label'
      helper='Helper Text'
      id='age'
      htmlFor='age'
      labelId='labelId'
      state='error'
    />
  );
}
