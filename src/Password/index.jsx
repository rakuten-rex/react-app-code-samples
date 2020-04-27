import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Password', [
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
      name: 'Show Password',
      Component: lazy(() => import('./ShowPassword')),
      file: 'ShowPassword',
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
      name: 'PasswordLabelHelper Default',
      Component: lazy(() => import('./PasswordLabelHelperDefault')),
      file: 'PasswordLabelHelperDefault',
    },
    {
      name: 'PasswordLabelHelper Disabled',
      Component: lazy(() => import('./PasswordLabelHelperDisabled')),
      file: 'PasswordLabelHelperDisabled',
    },
    {
      name: 'PasswordLabelHelper Error',
      Component: lazy(() => import('./PasswordLabelHelperError')),
      file: 'PasswordLabelHelperError',
    },
    {
      name: 'PasswordLabelHelper Valid',
      Component: lazy(() => import('./PasswordLabelHelperValid')),
      file: 'PasswordLabelHelperValid',
    },
    {
      name: 'PasswordLabelHelper Required',
      Component: lazy(() => import('./PasswordLabelHelperRequired')),
      file: 'PasswordLabelHelperRequired',
    },
    {
      name: 'PasswordLabelHelper ShowPassword',
      Component: lazy(() => import('./PasswordLabelHelperShowPassword')),
      file: 'PasswordLabelHelperShowPassword',
    },
    {
      name: 'PasswordLabelHelper With Default Value',
      Component: lazy(() => import('./PasswordLabelHelperWithDefaultValue')),
      file: 'PasswordLabelHelperWithDefaultValue',
    },
    {
      name: 'PasswordLabelHelper Theme',
      Component: lazy(() => import('./PasswordLabelHelperTheme')),
      file: 'PasswordLabelHelperTheme',
    },
  ]);
}
