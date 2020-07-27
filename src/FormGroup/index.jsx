import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('FormGroup', [
    {
      name: 'Default',
      Component: lazy(() => import('./Default')),
      maxWidth: '100%',
      file: 'Default',
    },
    {
      name: 'Inline Layout',
      Component: lazy(() => import('./InlineLayout')),
      maxWidth: '100%',
      file: 'InlineLayout',
    },
    {
      name: 'Block Layout',
      Component: lazy(() => import('./BlockLayout')),
      maxWidth: '100%',
      file: 'BlockLayout',
    },
    {
      name: 'Mixed Layout',
      Component: lazy(() => import('./MixedLayout')),
      maxWidth: '100%',
      file: 'MixedLayout',
    },
  ]);
}
