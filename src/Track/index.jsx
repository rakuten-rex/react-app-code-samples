import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Track', [
    {
      name: 'Default',
      Component: lazy(() => import('./Default')),
      maxWidth: '100%',
      file: 'Default',
    },
    {
      name: 'Four Steps',
      Component: lazy(() => import('./FourSteps')),
      maxWidth: '100%',
      file: 'FourSteps',
    },
    {
      name: 'Three Steps',
      Component: lazy(() => import('./ThreeSteps')),
      maxWidth: '100%',
      file: 'ThreeSteps',
    },
    {
      name: 'Theme',
      Component: lazy(() => import('./Theme')),
      maxWidth: '100%',
      file: 'Theme',
    },
  ]);
}
