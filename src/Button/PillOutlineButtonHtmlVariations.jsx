import React from 'react';
import PillOutlineButton from '@rakuten-rex/button/PillOutlineButton';
import PillOutlineButtonInput from '@rakuten-rex/button/PillOutlineButton/PillOutlineButtonDiv';
import PillOutlineButtonLink from '@rakuten-rex/button/PillOutlineButton/PillOutlineButtonLink';
import PillOutlineButtonDiv from '@rakuten-rex/button/PillOutlineButton/PillOutlineButtonDiv';

export default function MyComponent() {
  return (
    <div>
      <PillOutlineButton>Button Tag</PillOutlineButton>
      <PillOutlineButtonInput>Input Tag</PillOutlineButtonInput>
      <PillOutlineButtonLink href="/">Link Tag with href</PillOutlineButtonLink>
      <PillOutlineButtonDiv>Div Tag</PillOutlineButtonDiv>
    </div>
  );
}
