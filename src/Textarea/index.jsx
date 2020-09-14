import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Textarea', [
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
      name: 'Theme',
      Component: lazy(() => import('./Theme')),
      file: 'Theme',
    },
    {
      name: 'Textarea Label Helper Default',
      Component: lazy(() => import('./TextareaLabelHelperDefault')),
      file: 'TextareaLabelHelperDefault',
    },
    {
      name: 'Textarea Label Helper Disabled',
      Component: lazy(() => import('./TextareaLabelHelperDisabled')),
      file: 'TextareaLabelHelperDisabled',
    },
    {
      name: 'Textarea Label Helper Error',
      Component: lazy(() => import('./TextareaLabelHelperError')),
      file: 'TextareaLabelHelperError',
    },
    {
      name: 'Textarea Label Helper Valid',
      Component: lazy(() => import('./TextareaLabelHelperValid')),
      file: 'TextareaLabelHelperValid',
    },
    {
      name: 'Textarea Label Helper With Customized Ref Default Focus',
      Component: lazy(() => import('./TextareaLabelHelperWithCustomizedRef')),
      file: 'TextareaLabelHelperWithCustomizedRef',
    },
    {
      name: 'Textarea Label Helper Theme',
      Component: lazy(() => import('./TextareaLabelHelperTheme')),
      file: 'TextareaLabelHelperTheme',
    },
  ]);
}
