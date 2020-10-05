import React from 'react';
import Slider from '@rakuten-rex/slider';

export default function MyComponent() {
  return (
    <Slider
      name="sample_slider"
      trackWidth={300}
      initial={500}
      min={0}
      max={999999}
      showValue={true}
    />
  );
}
