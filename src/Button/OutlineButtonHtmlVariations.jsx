import React from 'react';
import OutlineButtonInput from '@rakuten-rex/button/OutlineButton/OutlineButtonDiv';
import OutlineButtonLink from '@rakuten-rex/button/OutlineButton/OutlineButtonLink';
import OutlineButtonDiv from '@rakuten-rex/button/OutlineButton/OutlineButtonDiv';

export default function MyComponent() {
  return (
    <div>
      <OutlineButtonInput>Input Tag</OutlineButtonInput>{' '}
      <OutlineButtonLink href="/">Link Tag with href</OutlineButtonLink>{' '}
      <OutlineButtonDiv>Div Tag</OutlineButtonDiv>
    </div>
  );
}
