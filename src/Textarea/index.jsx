import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Textarea', [
    {
      name: 'Default',
      Component: lazy(() => import('./Default'))
    },
    {
      name: 'Disabled',
      Component: lazy(() => import('./Disabled'))
    },
    {
      name: 'Error',
      Component: lazy(() => import('./Error'))
    },
    {
      name: 'Valid',
      Component: lazy(() => import('./Valid'))
    },
    {
      name: 'Theme',
      Component: lazy(() => import('./Theme'))
    },
    {
      name: 'Textarea Label Helper Default',
      Component: lazy(() => import('./TextareaLabelHelperDefault'))
    },
    {
      name: 'Textarea Label Helper Disabled',
      Component: lazy(() => import('./TextareaLabelHelperDisabled'))
    },
    {
      name: 'Textarea Label Helper Error',
      Component: lazy(() => import('./TextareaLabelHelperError'))
    },
    {
      name: 'Textarea Label Helper Valid',
      Component: lazy(() => import('./TextareaLabelHelperValid'))
    },
    {
      name: 'Textarea Label Helper Theme',
      Component: lazy(() => import('./TextareaLabelHelperTheme'))
    },
  ]);
}
