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
      name: 'WebFontEmbed',
      Component: lazy(() => import('./WebFontEmbed')),
      maxWidth: '100%',
      file: 'WebFontEmbed',
    },
  ]);
}
