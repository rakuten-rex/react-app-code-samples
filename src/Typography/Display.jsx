import React from 'react';
import Display1 from '@rakuten-rex/typography/Display1';
import Display2 from '@rakuten-rex/typography/Display2';
import Display3 from '@rakuten-rex/typography/Display3';
import Display4 from '@rakuten-rex/typography/Display4';
import Display5 from '@rakuten-rex/typography/Display5';

export default function MyComponent() {
  return (
    <>
      <Display1 lang="en" gutterBottom={true}>
        h1. The quick brown fox jumps over the lazy dog
      </Display1>
      <Display2 lang="en" gutterBottom={true}>
        h2. The quick brown fox jumps over the lazy dog
      </Display2>
      <Display3 lang="en" gutterBottom={true}>
        h3. The quick brown fox jumps over the lazy dog
      </Display3>
      <Display4 lang="en" gutterBottom={true}>
        h4. The quick brown fox jumps over the lazy dog
      </Display4>
      <Display5 lang="en" gutterBottom={true}>
        h5. The quick brown fox jumps over the lazy dog
      </Display5>
      <Display1 lang="ja" gutterBottom={true}>
        h1. 新しい時代のこころを映すタイプフェイスデザイン
      </Display1>
      <Display2 lang="ja" gutterBottom={true}>
        h2. 新しい時代のこころを映すタイプフェイスデザイン
      </Display2>
      <Display3 lang="ja" gutterBottom={true}>
        h3. 新しい時代のこころを映すタイプフェイスデザイン
      </Display3>
      <Display4 lang="ja" gutterBottom={true}>
        h4. 新しい時代のこころを映すタイプフェイスデザイン
      </Display4>
      <Display5 lang="ja" gutterBottom={true}>
        h5. 新しい時代のこころを映すタイプフェイスデザイン
      </Display5>
    </>
  );
}
