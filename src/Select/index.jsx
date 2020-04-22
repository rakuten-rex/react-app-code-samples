import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Select', [
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
      name: 'Required',
      Component: lazy(() => import('./Required'))
    },
    {
      name: 'With Selected Option',
      Component: lazy(() => import('./WithSelectedOption'))
    },
    {
      name: 'Theme',
      Component: lazy(() => import('./Theme'))
    },
    {
      name: 'Select Label Helper Default',
      Component: lazy(() => import('./SelectLabelHelperDefault'))
    },
    {
      name: 'Select Label Helper Disabled',
      Component: lazy(() => import('./SelectLabelHelperDisabled'))
    },
    {
      name: 'Select Label Helper Error',
      Component: lazy(() => import('./SelectLabelHelperError'))
    },
    {
      name: 'Select Label Helper Valid',
      Component: lazy(() => import('./SelectLabelHelperValid'))
    },
    {
      name: 'Select Label Helper Required',
      Component: lazy(() => import('./SelectLabelHelperRequired'))
    },
    {
      name: 'Select Label Helper With Selected Option',
      Component: lazy(() => import('./SelectLabelHelperWithSelectedOption'))
    },
    {
      name: 'Select Label Helper Theme',
      Component: lazy(() => import('./SelectLabelHelperTheme'))
    },
  ]);
}
