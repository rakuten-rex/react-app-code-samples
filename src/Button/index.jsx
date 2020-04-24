import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Button', [
    {
      name: 'Button',
      Component: lazy(() => import('./Default')),
      file: 'Default',
    },
    {
      name: 'Button Html Variations',
      Component: lazy(() => import('./ButtonHtmlVariations')),
      file: 'ButtonHtmlVariations',
      maxWidth: '100%',
    },
    {
      name: 'Button Theme',
      Component: lazy(() => import('./Theme')),
      file: 'Theme',
    },
    {
      name: 'Outline Button',
      Component: lazy(() => import('./OutlineButton')),
      file: 'OutlineButton',
    },
    {
      name: 'Outline Button Html Variations',
      Component: lazy(() => import('./OutlineButtonHtmlVariations')),
      file: 'OutlineButtonHtmlVariations',
      maxWidth: '100%',
    },
    {
      name: 'Outline Button Theme',
      Component: lazy(() => import('./OutlineButtonTheme')),
      file: 'OutlineButtonTheme',
    },
    {
      name: 'Pill Button',
      Component: lazy(() => import('./PillButton')),
      file: 'PillButton',
    },
    {
      name: 'Pill Button Html Variations',
      Component: lazy(() => import('./PillButtonHtmlVariations')),
      file: 'PillButtonHtmlVariations',
      maxWidth: '100%',
    },
    {
      name: 'Pill Button Theme',
      Component: lazy(() => import('./PillButtonTheme')),
      file: 'PillButtonTheme',
    },
    {
      name: 'Pill Outline Button',
      Component: lazy(() => import('./PillOutlineButton')),
      file: 'PillOutlineButton',
    },
    {
      name: 'Pill Outline Button Html Variations',
      Component: lazy(() => import('./PillOutlineButtonHtmlVariations')),
      file: 'PillOutlineButtonHtmlVariations',
      maxWidth: '100%',
    },
    {
      name: 'Pill Outline Button Theme',
      Component: lazy(() => import('./PillOutlineButtonTheme')),
      file: 'PillOutlineButtonTheme',
    },
    {
      name: 'Link Button',
      Component: lazy(() => import('./LinkButton')),
      file: 'LinkButton',
    },
    {
      name: 'Link Button Html Variations',
      Component: lazy(() => import('./LinkButtonHtmlVariations')),
      file: 'LinkButtonHtmlVariations',
      maxWidth: '100%',
    },
    {
      name: 'Link Button Theme',
      Component: lazy(() => import('./LinkButtonTheme')),
      file: 'LinkButtonTheme',
    },
  ]);
}
