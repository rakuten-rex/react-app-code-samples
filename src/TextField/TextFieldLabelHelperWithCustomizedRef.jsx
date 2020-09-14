import React, { useEffect, useRef } from 'react';
import TextFieldLabelHelper from '@rakuten-rex/text-field/TextFieldLabelHelper';

export default function MyComponent() {
  const ownRef = useRef();

  useEffect(() => ownRef.current && ownRef.current.focus());

  return (
    <TextFieldLabelHelper
      id="age"
      name="firstname"
      placeholder="Placeholder"
      htmlFor="firstname"
      label="Label"
      labelId="labelId"
      helper="Helper Text"
      inputRef={ownRef}
    />
  );
}
