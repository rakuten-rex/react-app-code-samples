import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Button', [
    {
      name: 'Default',
      Component: lazy(() => import('./Default')),
      file: 'Default',
    },
    {
      name: 'Outline Button',
      Component: lazy(() => import('./OutlineButton')),
      file: 'OutlineButton',
    },
  ]);
}
