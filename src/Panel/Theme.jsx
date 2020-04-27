import React from 'react';
import Panel from '@rakuten-rex/panel';

export default function MyComponent() {
  return (
    <Panel
      shadow={1}
      style={{
        '--rex-panel-background': '#ffffff',
        '--rex-panel-text': 'crimson',
        '--rex-panel-border-radius': '0.75rem',
      }}
    >
      Welcome to Dynamic React
    </Panel>
  );
}
