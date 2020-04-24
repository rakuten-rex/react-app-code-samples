import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Password', [
    {
      name: 'Default',
      Component: lazy(() => import('./Default')),
    },
    {
      name: 'Disabled',
      Component: lazy(() => import('./Disabled')),
    },
    {
      name: 'Error',
      Component: lazy(() => import('./Error')),
    },
    {
      name: 'Valid',
      Component: lazy(() => import('./Valid')),
    },
    {
      name: 'Required',
      Component: lazy(() => import('./Required')),
    },
    {
      name: 'Show Password',
      Component: lazy(() => import('./ShowPassword')),
    },
    {
      name: 'With Default Value',
      Component: lazy(() => import('./WithDefaultValue')),
    },
    {
      name: 'Theme',
      Component: lazy(() => import('./Theme')),
    },
    {
      name: 'PasswordLabelHelper Default',
      Component: lazy(() => import('./PasswordLabelHelperDefault')),
    },
    {
      name: 'PasswordLabelHelper Disabled',
      Component: lazy(() => import('./PasswordLabelHelperDisabled')),
    },
    {
      name: 'PasswordLabelHelper Error',
      Component: lazy(() => import('./PasswordLabelHelperError')),
    },
    {
      name: 'PasswordLabelHelper Valid',
      Component: lazy(() => import('./PasswordLabelHelperValid')),
    },
    {
      name: 'PasswordLabelHelper Required',
      Component: lazy(() => import('./PasswordLabelHelperRequired')),
    },
    {
      name: 'PasswordLabelHelper ShowPassword',
      Component: lazy(() => import('./PasswordLabelHelperShowPassword')),
    },
    {
      name: 'PasswordLabelHelper With Default Value',
      Component: lazy(() => import('./PasswordLabelHelperWithDefaultValue')),
    },
    {
      name: 'PasswordLabelHelper Theme',
      Component: lazy(() => import('./PasswordLabelHelperTheme')),
    },
    {
      name: 'Disabled',
      Component: lazy(() => import('./Disabled')),
    },
    {
      name: 'Error',
      Component: lazy(() => import('./Error')),
    },
    {
      name: 'Valid',
      Component: lazy(() => import('./Valid')),
    },
    {
      name: 'Required',
      Component: lazy(() => import('./Required')),
    },
    {
      name: 'Show Password',
      Component: lazy(() => import('./ShowPassword')),
    },
    {
      name: 'With Default Value',
      Component: lazy(() => import('./WithDefaultValue')),
    },
    {
      name: 'Theme',
      Component: lazy(() => import('./Theme')),
    },
    {
      name: 'PasswordLabelHelper Default',
      Component: lazy(() => import('./PasswordLabelHelperDefault')),
    },
    {
      name: 'PasswordLabelHelper Disabled',
      Component: lazy(() => import('./PasswordLabelHelperDisabled')),
    },
    {
      name: 'PasswordLabelHelper Error',
      Component: lazy(() => import('./PasswordLabelHelperError')),
    },
    {
      name: 'PasswordLabelHelper Valid',
      Component: lazy(() => import('./PasswordLabelHelperValid')),
    },
    {
      name: 'PasswordLabelHelper Required',
      Component: lazy(() => import('./PasswordLabelHelperRequired')),
    },
    {
      name: 'PasswordLabelHelper ShowPassword',
      Component: lazy(() => import('./PasswordLabelHelperShowPassword')),
    },
    {
      name: 'PasswordLabelHelper With Default Value',
      Component: lazy(() => import('./PasswordLabelHelperWithDefaultValue')),
    },
    {
      name: 'PasswordLabelHelper Theme',
      Component: lazy(() => import('./PasswordLabelHelperTheme')),
    },
  ]);
}
