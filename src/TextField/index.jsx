import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('TextField', [
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
      name: 'With Default Value',
      Component: lazy(() => import('./WithDefaultValue')),
      file: 'WithDefaultValue',
    },
    {
      name: 'Theme',
      Component: lazy(() => import('./Theme')),
      file: 'Theme',
    },
    {
      name: 'TextFieldLabelHelper Default',
      Component: lazy(() => import('./TextFieldLabelHelperDefault')),
      file: 'TextFieldLabelHelperDefault',
    },
    {
      name: 'TextFieldLabelHelper Disabled',
      Component: lazy(() => import('./TextFieldLabelHelperDisabled')),
      file: 'TextFieldLabelHelperDisabled',
    },
    {
      name: 'TextFieldLabelHelper Error',
      Component: lazy(() => import('./TextFieldLabelHelperError')),
      file: 'TextFieldLabelHelperError',
    },
    {
      name: 'TextFieldLabelHelper Valid',
      Component: lazy(() => import('./TextFieldLabelHelperValid')),
      file: 'TextFieldLabelHelperValid',
    },
    {
      name: 'TextFieldLabelHelper Required',
      Component: lazy(() => import('./TextFieldLabelHelperRequired')),
      file: 'TextFieldLabelHelperRequired',
    },
    {
      name: 'TextFieldLabelHelper With Default Value',
      Component: lazy(() => import('./TextFieldLabelHelperWithDefaultValue')),
      file: 'TextFieldLabelHelperWithDefaultValue',
    },
    {
      name: 'TextFieldLabelHelper Theme',
      Component: lazy(() => import('./TextFieldLabelHelperTheme')),
      file: 'TextFieldLabelHelperTheme',
    },
  ]);
}
