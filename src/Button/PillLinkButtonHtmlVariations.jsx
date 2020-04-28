import React from 'react';
import PillLinkButton from '@rakuten-rex/button/PillLinkButton';
import PillLinkButtonInput from '@rakuten-rex/button/PillLinkButton/PillLinkButtonInput';
import PillLinkButtonLink from '@rakuten-rex/button/PillLinkButton/PillLinkButtonLink';
import PillLinkButtonDiv from '@rakuten-rex/button/PillLinkButton/PillLinkButtonDiv';

export default function MyComponent() {
  return (
    <div>
      <PillLinkButton>Button Tag</PillLinkButton>
      <PillLinkButtonInput>Input Tag</PillLinkButtonInput>
      <PillLinkButtonLink href="/">Link Tag with href</PillLinkButtonLink>
      <PillLinkButtonDiv>Div Tag</PillLinkButtonDiv>
    </div>
  );
}
