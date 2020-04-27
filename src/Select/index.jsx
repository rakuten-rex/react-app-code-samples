import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Select', [
    {
      name: 'Default',
      Component: lazy(() => import('./Default')),
      file: 'Default',
    },
    {
      name: 'Disabled',
      Component: lazy(() => import('./Disabled')),
      file: 'Disabled',
    },
    {
      name: 'Error',
      Component: lazy(() => import('./Error')),
      file: 'Error',
    },
    {
      name: 'Valid',
      Component: lazy(() => import('./Valid')),
      file: 'Valid',
    },
    {
      name: 'Required',
      Component: lazy(() => import('./Required')),
      file: 'Required',
    },
    {
      name: 'With Selected Option',
      Component: lazy(() => import('./WithSelectedOption')),
      file: 'WithSelectedOption',
    },
    {
      name: 'Theme',
      Component: lazy(() => import('./Theme')),
      file: 'Theme',
    },
    {
      name: 'Select Label Helper Default',
      Component: lazy(() => import('./SelectLabelHelperDefault')),
      file: 'SelectLabelHelperDefault',
    },
    {
      name: 'Select Label Helper Disabled',
      Component: lazy(() => import('./SelectLabelHelperDisabled')),
      file: 'SelectLabelHelperDisabled',
    },
    {
      name: 'Select Label Helper Error',
      Component: lazy(() => import('./SelectLabelHelperError')),
      file: 'SelectLabelHelperError',
    },
    {
      name: 'Select Label Helper Valid',
      Component: lazy(() => import('./SelectLabelHelperValid')),
      file: 'SelectLabelHelperValid',
    },
    {
      name: 'Select Label Helper Required',
      Component: lazy(() => import('./SelectLabelHelperRequired')),
      file: 'SelectLabelHelperRequired',
    },
    {
      name: 'Select Label Helper With Selected Option',
      Component: lazy(() => import('./SelectLabelHelperWithSelectedOption')),
      file: 'SelectLabelHelperWithSelectedOption',
    },
    {
      name: 'Select Label Helper Theme',
      Component: lazy(() => import('./SelectLabelHelperTheme')),
      file: 'SelectLabelHelperTheme',
    },
  ]);
}
