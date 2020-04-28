import React from 'react';
import LinkButton from '@rakuten-rex/button/LinkButton';
import LinkButtonInput from '@rakuten-rex/button/LinkButton/LinkButtonInput';
import LinkButtonLink from '@rakuten-rex/button/LinkButton/LinkButtonLink';
import LinkButtonDiv from '@rakuten-rex/button/LinkButton/LinkButtonDiv';

export default function MyComponent() {
  return (
    <div>
      <LinkButton>Button Tag</LinkButton>
      <LinkButtonInput>Input Tag</LinkButtonInput>
      <LinkButtonLink href="/">Link Tag with href</LinkButtonLink>
      <LinkButtonDiv>Div Tag</LinkButtonDiv>
    </div>
  );
}
