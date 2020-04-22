import React from 'react';
import Track from '@rakuten-rex/track';

export default function MyComponent() {
  return (
    <Track
      maxsteps={5}
      options={[
        { "title": "Enter your information", "status": "visited" }, 
        { "title": "Register service for use", "status": "visited" }, 
        { "title": "Confirmation", "status": "current" }, 
        { "title": "ID/Password input", "status": "default" }, 
        { "title": "Completion", "status": "default" }
      ]}
      style={{
        "--rex-track-text-color": "#A2006A",
        "--rex-track-circle-background": "#FFE9F8",
        "--rex-track-theme-color": "#CB0085",
        "--rex-track-line-color": "#830056"
      }} 
    />
  );
}