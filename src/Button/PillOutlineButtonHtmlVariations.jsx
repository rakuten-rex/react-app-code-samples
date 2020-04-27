import React from 'react';
import PillOutlineButtonInput from '@rakuten-rex/button/PillOutlineButton/PillOutlineButtonDiv';
import PillOutlineButtonLink from '@rakuten-rex/button/PillOutlineButton/PillOutlineButtonLink';
import PillOutlineButtonDiv from '@rakuten-rex/button/PillOutlineButton/PillOutlineButtonDiv';

export default function MyComponent() {
  return (
    <div>
      <PillOutlineButtonInput>Input Tag</PillOutlineButtonInput>{' '}
      <PillOutlineButtonLink href="/">Link Tag with href</PillOutlineButtonLink>{' '}
      <PillOutlineButtonDiv>Div Tag</PillOutlineButtonDiv>
    </div>
  );
}
