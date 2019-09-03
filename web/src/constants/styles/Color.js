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
  Background: '#FFF6EE',
  Text: '#520589',

  // Grayscale Palette
  Black: '#000000',
  Nightsky: '#151313',
  Warmsky: '#34281D',
  Gravel: '#4E4135',
  Slate: '#928070',
  Tan: '#C4AC97',
  Gray: '#DAC9BA',
  Blush: '#F6E7D9',
  Cream: '#FFF6EE',
  White: '#FFFFFF',

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

export const ColorMatch = color => {
  switch (color) {
    // Core Colors
    case 'Primary':
      return '#520589';
    case 'Secondary':
      return '#5D6376';
    case 'Background':
      return '#FFF6EE';
    case 'Text':
      return '#520589';

    // Grayscale Palette
    case 'Black':
      return '#000000';
    case 'Nightsky':
      return '#151313';
    case 'Warmsky':
      return '#34281D';
    case 'Gravel':
      return '#4E4135';
    case 'Slate':
      return '#928070';
    case 'Gray':
      return '#DAC9BA';
    case 'Blush':
      return '#F6E7D9';
    case 'Cream':
      return '#FFF6EE';
    case 'White':
      return '#FFFFFF';

    // Warm Palette
    case 'Clay':
      return '#A33609';
    case 'Nova':
      return '#E24809';
    case 'Sunlight':
      return '#E9A200';
    case 'Sunset':
      return '#ED9158';

    // Cool Palette
    case 'Galaxy':
      return '#09004B';
    case 'Deepsea':
      return '#002F9E';
    case 'Ocean':
      return '#269FE2';
    case 'Sky':
      return '#7AC0E6';
    case 'Dino':
      return '#23023B';
    case 'Eggplant':
      return '#520589';
    case 'Lilac':
      return '#874BB4';

    // Feedback Palette
    case 'Warning':
      return '#FC6376';
    case 'Success':
      return '#40DA33';

    // Fallback
    default:
      return '#520589';
  }
};

//////////////////////////////////////////////////////////////////////
// End Component
