import React from 'react';
import PasswordLabelHelper from '@rakuten-rex/password/PasswordLabelHelper';

export default function MyComponent() {
  return (
    <PasswordLabelHelper
      placeholder='Password'
      htmlFor='password'
      label='Label'
      labelId='labelId'
      helper='Helper Text'
      name='Password'
      state='error'
    />
  );
}
