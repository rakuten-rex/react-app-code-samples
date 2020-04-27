import React from 'react';
import PillButtonInput from '@rakuten-rex/button/PillButton/PillButtonDiv';
import PillButtonLink from '@rakuten-rex/button/PillButton/PillButtonLink';
import PillButtonDiv from '@rakuten-rex/button/PillButton/PillButtonDiv';

export default function MyComponent() {
  return (
    <div>
      <PillButtonInput>Input Tag</PillButtonInput>{' '}
      <PillButtonLink href="/">Link Tag with href</PillButtonLink>{' '}
      <PillButtonDiv>Div Tag</PillButtonDiv>
    </div>
  );
}
