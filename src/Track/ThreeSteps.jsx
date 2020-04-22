import React from 'react';
import Track from '@rakuten-rex/track';

export default function MyComponent() {
  return (
    <Track
      maxsteps={3}
      options={[
        { "title": "Enter your information", "status": "visited" }, 
        { "title": "Confirmation", "status": "current" }, 
        { "title": "Completion", "status": "default" }
      ]}
    />
  );
}
