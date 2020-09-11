import React, { useEffect, useRef } from 'react';
import TextareaLabelHelper from '@rakuten-rex/textarea/TextareaLabelHelper';

export default function MyComponent() {
  const ownRef = useRef();

  useEffect(() => ownRef.current && ownRef.current.focus());

  return (
    <TextareaLabelHelper
      placeholder="Placeholder"
      label="Label"
      helper="Helper Text"
      id="age"
      htmlFor="age"
      labelId="labelId"
      textareaRef={ownRef}
    />
  );
}
