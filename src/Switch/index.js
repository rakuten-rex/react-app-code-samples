import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Switch', [
    {
      name: 'Switch Default',
      Component: lazy(() => import('./Default')),
      file: 'Default',
      maxWidth: '100%',
    },
    {
      name: 'Switch Checked State',
      Component: lazy(() => import('./CheckedState')),
      file: 'CheckedState',
      maxWidth: '100%',
    },
    {
      name: 'Switch Disabled State',
      Component: lazy(() => import('./DisabledState')),
      file: 'DisabledState',
      maxWidth: '100%',
    },
    {
      name: 'Switch Label Left',
      Component: lazy(() => import('./LabelLeft')),
      file: 'LabelLeft',
      maxWidth: '100%',
    },
    {
      name: 'Theme',
      Component: lazy(() => import('./Theme')),
      file: 'Theme',
      maxWidth: '100%',
    },
    {
      name: 'Switch Group Default',
      Component: lazy(() => import('./SwitchToggleGroupDefault')),
      file: 'SwitchToggleGroupDefault',
      maxWidth: '100%',
    },
    {
      name: 'Switch Group Checked State',
      Component: lazy(() => import('./SwitchToggleGroupChecked')),
      file:'SwitchToggleGroupChecked',
      maxWidth: '100%',
    },
    {
      name: 'Switch Group Disabled State',
      Component: lazy(() => import('./SwitchToggleGroupDisabled')),
      file: 'SwitchToggleGroupDisabled',
      maxWidth: '100%',
    },
    {
      name: 'Switch Group Label Left',
      Component: lazy(() => import('./SwitchToggleGroupLabelLeft')),
      file: 'SwitchToggleGroupLabelLeft',
      maxWidth: '100%',
    },
    {
      name: 'Switch Group Theme',
      Component: lazy(() => import('./SwitchToggleGroupTheme')),
      file: 'SwitchToggleGroupTheme',
      maxWidth: '100%',
    },
  ]);
}
