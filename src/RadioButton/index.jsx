import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('RadioButton', [
    {
      name: 'Default',
      Component: lazy(() => import('./Default')),
      maxWidth: '100%',
    },
    {
      name: 'Checked State',
      Component: lazy(() => import('./CheckedState')),
      maxWidth: '100%',
    },
    {
      name: 'Disabled State',
      Component: lazy(() => import('./DisabledState')),
      maxWidth: '100%',
    },
    {
      name: 'Layout Inline',
      Component: lazy(() => import('./LayoutInline')),
      maxWidth: '100%',
    },
    {
      name: 'Layout Block',
      Component: lazy(() => import('./LayoutBlock')),
      maxWidth: '100%',
    },
    {
      name: 'Theme',
      Component: lazy(() => import('./Theme')),
      maxWidth: '100%',
    },
  ]);
}
