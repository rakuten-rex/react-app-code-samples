import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Panel', [
    {
      name: 'Default',
      Component: lazy(() => import('./Default')),
      maxWidth: '100%',
      file: 'Default',
    },
    {
      name: 'With Box Shadow',
      Component: lazy(() => import('./WithBoxShadow')),
      maxWidth: '90%',
      file: 'WithBoxShadow',
    },
    {
      name: 'With Box Shadow And Padding',
      Component: lazy(() => import('./WithBoxShadowAndPadding')),
      maxWidth: '90%',
      file: 'WithBoxShadowAndPadding',
    },
    {
      name: 'Theme',
      Component: lazy(() => import('./Theme')),
      maxWidth: '90%',
      file: 'Theme',
    },
  ]);
}
