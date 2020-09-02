import React from 'react';
import LeadBodyText from '@rakuten-rex/typography/LeadBodyText';
import BodyText1 from '@rakuten-rex/typography';
import BodyText2 from '@rakuten-rex/typography/BodyText2';
import Caption from '@rakuten-rex/typography/Caption';
import Overline from '@rakuten-rex/typography/Overline';

export default function MyComponent() {
  return (
    <>
      <LeadBodyText gutterBottom={true}>
        'LeadBodyText' Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </LeadBodyText>
      <BodyText1 gutterBottom={true}>
        'BodyText1' Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </BodyText1>
      <BodyText2 gutterBottom={true}>
        'BodyText2' Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </BodyText2>
      <Caption gutterBottom={true}>'Caption' Text</Caption>
      <Overline gutterBottom={true}>'Overline' Text</Overline>
      <LeadBodyText gutterBottom={true}>
        「LeadBodyText」
        吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。
      </LeadBodyText>
      <BodyText1 gutterBottom={true}>
        「BodyText1」
        吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。
      </BodyText1>
      <BodyText2 gutterBottom={true}>
        「BodyText2」
        吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕えて煮て食うという話である。
      </BodyText2>
      <Caption gutterBottom={true}>「Caption」 テキスト</Caption>
      <Overline gutterBottom={true}>「Overline」 テキスト</Overline>
    </>
  );
}
