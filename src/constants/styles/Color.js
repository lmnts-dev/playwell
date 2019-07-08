// Color.js:
// This is the sitewide palette.

// Imports
//////////////////////////////////////////////////////////////////////

import { createGlobalStyle } from 'styled-components';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Color = {
  // Core Colors
  Primary: '#ed652b',
  Secondary: '#5D6376',
  Background: '#FFFFFF',

  // Grayscale Palette
  Black: '#000000',
  Nightsky: '#151313',
  Warmsky: '#7A7070',
  Gunmetal: '#5D6376',
  Slate: '#AEB9C4',
  Gray: '#CCD0D6',
  Snow: '#F2F3F3',
  White: '#ffffff',

  // Main Palette
  Leaf: '#ed652b',
  Mint: '#9DF096',
  Tahoe: '#2984FD',
  Sky: '#A5D3FF',
  Sunset: '#FC6376',
  Dank: '#F8E71C',
  Flower: '#E17E00',
  Indigo: '#351868',
  PurpleHaze: '#0D1632',

  // Feedback Palette
  Warning: '#FC6376',
  Success: '#40DA33',
};

export const Palette = createGlobalStyle`
  body {
    color: ${Color.Black};
    background-color: ${Color.Background};
  }

  ::-moz-selection { background: ${Color.Primary}; color: ${Color.White} }
  ::selection { background: ${Color.Primary}; color: ${Color.White} }
`;

//////////////////////////////////////////////////////////////////////
// End Component
