import React from 'react';
import ButtonInput from '@rakuten-rex/button/Button/ButtonInput';
import ButtonLink from '@rakuten-rex/button/Button/ButtonLink';
import ButtonDiv from '@rakuten-rex/button/Button/ButtonDiv';

export default function MyComponent() {
  return (
    <div>
      <ButtonInput>Input Tag</ButtonInput>{' '}
      <ButtonLink href="/">Link Tag with href</ButtonLink>{' '}
      <ButtonDiv>Div Tag</ButtonDiv>
    </div>
  );
}
