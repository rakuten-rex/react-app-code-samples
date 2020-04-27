import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Stepper', [
    {
      name: 'Stepper Default',
      Component: lazy(() => import('./Default')),
      maxWidth: '15%',
      file: 'Default',
    },
    {
      name: 'Stepper Disabled State',
      Component: lazy(() => import('./DisabledState')),
      maxWidth: '15%',
      file: 'DisabledState',
    },
    {
      name: 'Stepper With Default Value',
      Component: lazy(() => import('./WithDefaultValue')),
      maxWidth: '15%',
      file: 'WithDefaultValue',
    },
    {
      name: 'Stepper Theme',
      Component: lazy(() => import('./Theme')),
      maxWidth: '15%',
      file: 'Theme',
    },
    {
      name: 'Stepper Label Default',
      Component: lazy(() => import('./LabelDefault')),
      maxWidth: '15%',
      file: 'LabelDefault',
    },
    {
      name: 'Stepper Label Disabled',
      Component: lazy(() => import('./LabelDisabled')),
      maxWidth: '15%',
      file: 'LabelDisabled',
    },
    {
      name: 'Stepper Label With Default Value',
      Component: lazy(() => import('./LabelWithDefaultValue')),
      maxWidth: '15%',
      file: 'LabelWithDefaultValue',
    },
    {
      name: 'Stepper Label Theme',
      Component: lazy(() => import('./LabelTheme')),
      maxWidth: '15%',
      file: 'LabelTheme',
    },
  ]);
}
