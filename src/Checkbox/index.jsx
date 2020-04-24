import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Checkbox', [
    {
      name: 'Checkbox Default',
      Component: lazy(() => import('./Default')),
      file: 'Default',
    },
    {
      name: 'Checkbox Checked State',
      Component: lazy(() => import('./CheckedState')),
      file: 'CheckedState',
    },
    {
      name: 'Checkbox Disabled State',
      Component: lazy(() => import('./DisabledState')),
      file: 'DisabledState',
    },
    {
      name: 'Checkbox Theme',
      Component: lazy(() => import('./Theme')),
      file: 'Theme',
    },
    {
      name: 'Checkbox Group Default',
      maxWidth: '100%',
      Component: lazy(() => import('./CheckboxGroupDefault')),
      file: 'CheckboxGroupDefault',
    },
    {
      name: 'Checkbox Group Checked State',
      maxWidth: '100%',
      Component: lazy(() => import('./CheckboxGroupChecked')),
      file: 'CheckboxGroupChecked',
    },
    {
      name: 'Checkbox Group Disabled State',
      maxWidth: '100%',
      Component: lazy(() => import('./CheckboxGroupDisabled')),
      file: 'CheckboxGroupDisabled',
    },
    {
      name: 'Checkbox Group Layout Inline',
      maxWidth: '100%',
      Component: lazy(() => import('./CheckboxGroupInline')),
      file: 'CheckboxGroupInline',
    },
    {
      name: 'Checkbox Group Layout Block',
      Component: lazy(() => import('./CheckboxGroupBlock')),
      file: 'CheckboxGroupBlock',
    },
    {
      name: 'Checkbox Group Theme',
      maxWidth: '100%',
      Component: lazy(() => import('./CheckboxGroupTheme')),
      file: 'CheckboxGroupTheme',
    },
  ]);
}
