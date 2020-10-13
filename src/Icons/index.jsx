import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Icons', [
    {
      name: 'JSX',
      Component: lazy(() => import('./JSX')),
      maxWidth: '100%',
      file: 'JSX',
    },
    {
      name: 'WebFont',
      Component: lazy(() => import('./WebFont')),
      maxWidth: '100%',
      file: 'WebFont',
    },
    // {
    //   name: 'With Box Shadow And Padding',
    //   Component: lazy(() => import('./WithBoxShadowAndPadding')),
    //   maxWidth: '90%',
    //   file: 'WithBoxShadowAndPadding',
    // },
    // {
    //   name: 'Theme',
    //   Component: lazy(() => import('./Theme')),
    //   maxWidth: '90%',
    //   file: 'Theme',
    // },
  ]);
}
