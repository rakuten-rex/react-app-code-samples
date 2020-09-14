import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Typography', [
    {
      name: 'Default',
      Component: lazy(() => import('./Default')),
      maxWidth: '100%',
      file: 'Default',
    },
    {
      name: 'Headings',
      Component: lazy(() => import('./Headings')),
      maxWidth: '100%',
      file: 'Headings',
    },
    {
      name: 'Display',
      Component: lazy(() => import('./Display')),
      maxWidth: '100%',
      file: 'Display',
    },
  ]);
}
