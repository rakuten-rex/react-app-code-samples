import React from 'react';
import H1 from '@rakuten-rex/typography/H1';
import H2 from '@rakuten-rex/typography/H2';
import H3 from '@rakuten-rex/typography/H3';
import H4 from '@rakuten-rex/typography/H4';
import H5 from '@rakuten-rex/typography/H5';
import H6 from '@rakuten-rex/typography/H6';

export default function MyComponent() {
  return (
    <>
      <H1 lang='en' gutterBottom={true}>
        h1. The quick brown fox jumps over the lazy dog
      </H1>
      <H2 lang='en' gutterBottom={true}>
        h2. The quick brown fox jumps over the lazy dog
      </H2>
      <H3 lang='en' gutterBottom={true}>
        h3. The quick brown fox jumps over the lazy dog
      </H3>
      <H4 lang='en' gutterBottom={true}>
        h4. The quick brown fox jumps over the lazy dog
      </H4>
      <H5 lang='en' gutterBottom={true}>
        h5. The quick brown fox jumps over the lazy dog
      </H5>
      <H6 lang='en' gutterBottom={true}>
        h6. The quick brown fox jumps over the lazy dog
      </H6>
      <H1 lang='ja' gutterBottom={true}>
        h1. 新しい時代のこころを映すタイプフェイスデザイン
      </H1>
      <H2 lang='ja' gutterBottom={true}>
        h2. 新しい時代のこころを映すタイプフェイスデザイン
      </H2>
      <H3 lang='ja' gutterBottom={true}>
        h3. 新しい時代のこころを映すタイプフェイスデザイン
      </H3>
      <H4 lang='ja' gutterBottom={true}>
        h4. 新しい時代のこころを映すタイプフェイスデザイン
      </H4>
      <H5 lang='ja' gutterBottom={true}>
        h5. 新しい時代のこころを映すタイプフェイスデザイン
      </H5>
      <H6 lang='ja' gutterBottom={true}>
        h6. 新しい時代のこころを映すタイプフェイスデザイン
      </H6>
    </>
  );
}
