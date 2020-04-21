import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Checkbox', [
    {
      name: 'Checkbox Default',
      Component: lazy(() => import('./Default'))
    },
    {
      name: 'Checkbox Checked State',
      Component: lazy(() => import('./CheckedState'))
    },
    {
      name: 'Checkbox Disabled State',
      Component: lazy(() => import('./DisabledState'))
    },
    {
      name: 'Checkbox Theme',
      Component: lazy(() => import('./Theme'))
    }, 
    {
      name: 'Checkbox Group Default',
      Component: lazy(() => import('./CheckboxGroupDefault'))
    }, 
    {
      name: 'Checkbox Group Checked State',
      Component: lazy(() => import('./CheckboxGroupChecked'))
    }, 
    {
      name: 'Checkbox Group Disabled State',
      Component: lazy(() => import('./CheckboxGroupDisabled'))
    }, 
    {
      name: 'Checkbox Group Layout Inline',
      Component: lazy(() => import('./CheckboxGroupInline'))
    }, 
    {
      name: 'Checkbox Group Layout Block',
      Component: lazy(() => import('./CheckboxGroupBlock'))
    }, 
    {
      name: 'Checkbox Group Theme',
      Component: lazy(() => import('./CheckboxGroupTheme'))
    }, 
  ]);
}
