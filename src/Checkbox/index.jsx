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
      maxWidth: '100%',
      Component: lazy(() => import('./CheckboxGroupDefault'))
    }, 
    {
      name: 'Checkbox Group Checked State',
      maxWidth: '100%',
      Component: lazy(() => import('./CheckboxGroupChecked'))
    }, 
    {
      name: 'Checkbox Group Disabled State',
      maxWidth: '100%',
      Component: lazy(() => import('./CheckboxGroupDisabled'))
    }, 
    {
      name: 'Checkbox Group Layout Inline',
      maxWidth: '100%',
      Component: lazy(() => import('./CheckboxGroupInline'))
    }, 
    {
      name: 'Checkbox Group Layout Block',
      Component: lazy(() => import('./CheckboxGroupBlock'))
    }, 
    {
      name: 'Checkbox Group Theme',
      maxWidth: '100%',
      Component: lazy(() => import('./CheckboxGroupTheme'))
    }, 
  ]);
}
