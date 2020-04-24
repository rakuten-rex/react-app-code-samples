import React from 'react';
import Track from '@rakuten-rex/track';

export default function MyComponent() {
  return (
    <Track
      maxsteps={4}
      options={[
        { title: 'Enter your information', status: 'visited' },
        { title: 'Register service for use', status: 'visited' },
        { title: 'Confirmation', status: 'current' },
        { title: 'Completion', status: 'default' },
      ]}
    />
  );
}
