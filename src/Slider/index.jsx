import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Slider', [
    {
      name: 'Default',
      Component: lazy(() => import('./Default')),
      file: 'Default',
    },
    {
      name: 'Hover',
      Component: lazy(() => import('./Hover')),
      file: 'Hover',
    },
    {
      name: 'Disabled',
      Component: lazy(() => import('./Disabled')),
      file: 'Disabled',
    },
    {
      name: 'Show Value',
      Component: lazy(() => import('./ShowValue')),
      file: 'ShowValue',
    },
    {
      name: 'Theme',
      Component: lazy(() => import('./Theme')),
      file: 'Theme',
    },
  ]);
}
