// Color.js:
// This is the sitewide palette.

// Imports
//////////////////////////////////////////////////////////////////////

import { createGlobalStyle } from 'styled-components';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Color = {
  // Core Colors
  Primary: '#520589',
  Secondary: '#5D6376',
  Background: '#FFFFFF',

  // Grayscale Palette
  Black: '#000000',
  Nightsky: '#151313',
  Warmsky: '#34281D',
  Gravel: '#4E4135',
  Slate: '#928070',
  Gray: '#DAC9BA',
  Blush: '#F6E7D9',
  Cream: '#FFF6EE',
  White: '#ffffff',

  // Warm Palette
  Clay: '#A33609',
  Nova: '#E24809',
  Sunlight: '#E9A200',
  Sunset: '#ED9158',

  // Cool Palette
  Galaxy: '#09004B',
  Deepsea: '#002F9E',
  Ocean: '#269FE2',
  Sky: '#7AC0E6',
  Dino: '#23023B',
  Eggplant: '#520589',
  Lilac: '#874BB4',

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
