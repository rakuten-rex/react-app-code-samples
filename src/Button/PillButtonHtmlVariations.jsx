import React from 'react';
import PillButton from '@rakuten-rex/button/PillButton';
import PillButtonInput from '@rakuten-rex/button/PillButton/PillButtonDiv';
import PillButtonLink from '@rakuten-rex/button/PillButton/PillButtonLink';
import PillButtonDiv from '@rakuten-rex/button/PillButton/PillButtonDiv';

export default function MyComponent() {
  return (
    <div>
      <PillButton>Button Tag</PillButton>
      <PillButtonInput>Input Tag</PillButtonInput>
      <PillButtonLink href="/">Link Tag with href</PillButtonLink>
      <PillButtonDiv>Div Tag</PillButtonDiv>
    </div>
  );
}
