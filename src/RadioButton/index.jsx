import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('RadioButton', [
    {
      name: 'Default',
      Component: lazy(() => import('./Default')),
      maxWidth: '100%',
      file: 'Default',
    },
    {
      name: 'Checked State',
      Component: lazy(() => import('./CheckedState')),
      maxWidth: '100%',
      file: 'CheckedState',
    },
    {
      name: 'Disabled State',
      Component: lazy(() => import('./DisabledState')),
      maxWidth: '100%',
      file: 'DisabledState',
    },
    {
      name: 'Layout Inline',
      Component: lazy(() => import('./LayoutInline')),
      maxWidth: '100%',
      file: 'LayoutInline',
    },
    {
      name: 'Layout Block',
      Component: lazy(() => import('./LayoutBlock')),
      maxWidth: '100%',
      file: 'LayoutBlock',
    },
    {
      name: 'Theme',
      Component: lazy(() => import('./Theme')),
      maxWidth: '100%',
      file: 'Theme',
    },
  ]);
}
