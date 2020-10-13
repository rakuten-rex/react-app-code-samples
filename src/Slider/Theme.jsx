import React from 'react';
import Slider from '@rakuten-rex/slider';

export default function MyComponent() {
  return (
    <Slider
      name="slider_age"
      trackWidth={300}
      initial={500}
      min={0}
      max={1000}
      state="Theme Default"
      style={{
        '--rex-slider-theme-track': '#CB0085',
        '--rex-slider-theme-track-progress': '#CB0085',
        '--rex-slider-theme-bubble-text': '#ffffff',
        '--rex-slider-theme-bubble-background-color': '#A2006A',
        '--rex-slider-theme-thumb-background-color': '#A2006A',
        '--rex-slider-theme-thumb-hover-color': '#A2006A',
        '--rex-slider-theme-thumb-active-color': '#A2006A',
        '--rex-slider-theme-thumb-status-background-color': '#CB0085',
        '--rex-slider-theme-disabled-thumb': '#DFDFDF',
        '--rex-slider-theme-disabled-track': '#686868',
      }}
    />
  );
}
