/* eslint-disable */

// Theme.js:
// This file is primarily used to create naming and can also be
// used to automate some math. Don't forget if you update the other
// style files to include the export down below here if you want to
// reference it conveniently in the Theme.js export.

// Usage:
// 1. First import the file.
// import { Theme } from '../../../path/to/Theme'
// 2. Use it in your SC: 'color: ${Theme.Color.Primary}; or simply refer to the object and key when used in functions.'

import { Settings } from './site/Settings';
import { Font, Typography } from './styles/Font';
import { Base } from './styles/Base';
import { Color } from './styles/Color';

export const Theme = {
  // General Site Information & Keywords
  Site: Settings,

  // Fonts throughout the app.
  Font: Font,

  // Core measurements throughout the app.
  Base: {
    // Core Base Measurement
    Size: {
      Lg: Base.Size.Lg + 'px',
      Md: Base.Size.Md + 'px',
      Sm: Base.Size.Sm + 'px',
    },

    // Root Element Measurement
    Rem: {
      Lg: Base.Rem.Lg + 'px', // px
      Md: Base.Rem.Md + 'px', // px
      Sm: Base.Rem.Sm + 'px', // px
    },

    // Responsive Breakpoints
    Media: {
      Width: {
        Lg: Base.Media.Width.Lg + 'px',
        Md: Base.Media.Width.Md + 'px',
        Sm: Base.Media.Width.Sm + 'px',
      },
      Height: {
        Lg: Base.Media.Height.Lg + 'px',
        Md: Base.Media.Height.Md + 'px',
        Sm: Base.Media.Height.Sm + 'px',
        Slide: Base.Media.Height.Slide,
      },
    },

    // Site Grid
    Grid: {
      SiteWidth: Base.Grid.SiteWidth + 'px',
      Nav: {
        Orientation: Base.Grid.Nav.Orientation,
        Fixed: Base.Grid.Nav.Fixed,
        LogoPosition: Base.Grid.Nav.LogoPosition,
        Size: {
          Lg: Base.Grid.Nav.Size.Lg + 'px',
          Md: Base.Grid.Nav.Size.Md + 'px',
          Sm: Base.Grid.Nav.Size.Sm + 'px',
        },
      },

      Footer: {
        Size: {
          Lg: Base.Grid.Footer.Size.Lg + 'px',
          Md: Base.Grid.Footer.Size.Md + 'px',
          Sm: Base.Grid.Footer.Size.Sm + 'px',
        },
      },

      // Universal padding from the edge of the browser
      // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de
      Gutter: {
        Lg: {
          Top: Base.Grid.Gutter.Lg.Top + 'px',
          Bottom: Base.Grid.Gutter.Lg.Bottom + 'px',
          Right: Base.Grid.Gutter.Lg.Right + 'px',
          Left: Base.Grid.Gutter.Lg.Left + 'px',
        },
        Md: {
          Top: Base.Grid.Gutter.Md.Top + 'px',
          Bottom: Base.Grid.Gutter.Md.Bottom + 'px',
          Right: Base.Grid.Gutter.Md.Right + 'px',
          Left: Base.Grid.Gutter.Md.Left + 'px',
        },
        Sm: {
          Top: Base.Grid.Gutter.Sm.Top + 'px',
          Bottom: Base.Grid.Gutter.Sm.Bottom + 'px',
          Right: Base.Grid.Gutter.Sm.Right + 'px',
          Left: Base.Grid.Gutter.Sm.Left + 'px',
        },
      },
    },

    // View Width (vw) Based Measurements
    ViewWidth: {
      Padding: {
        Sm: Base.ViewWidth.Padding.Sm + 'vw',
        Md: Base.ViewWidth.Padding.Md + 'vw',
        Lg: Base.ViewWidth.Padding.Lg + 'vw',
      },
    },

    // Buttons
    Button: {
      Lg: Base.Button.Lg + 'px',
      Md: Base.Button.Md + 'px',
      Sm: Base.Button.Sm + 'px',
    },

    // Inputs
    Input: {
      Lg: Base.Input.Lg + 'px',
      Md: Base.Input.Md + 'px',
      Sm: Base.Input.Sm + 'px',
    },

    // Transitions
    Transition: {
      String: Base.Transition.String, // seconds
      Duration: Base.Transition.Duration + 's', // seconds
      Ease: Base.Transition.Ease, // Cubic Bezier Ease
      CssEase:
        'cubic-bezier(' +
        Base.Transition.Ease[0] +
        ', ' +
        Base.Transition.Ease[1] +
        ', ' +
        Base.Transition.Ease[2] +
        ', ' +
        Base.Transition.Ease[3] +
        ')', // Cubic Bezier Ease (CSS String)
      Page: Base.Transition.Page + 's', // milliseconds. Try to not go lower than 350ms or it gets buggy. TODO.
    },

    // Geometry
    Geometry: {
      Radius: Base.Geometry.Radius + 'px', // px
    },
  },

  // Core Palette & Colors
  Color: Color,
};

// Assign CSS Variables for automatic Media Queries.
export const Root = {
  // Core measurements throughout the app.

  // Core Base Measurement
  Size: 'var(--Size)',

  ViewWidthFontSize: 'var(--ViewWidthFontSize)',
  ViewHeightFontSize: 'var(--ViewHeightFontSize)',
  IconSize: 'var(--IconSize)',

  // Root Element Measurement
  Rem: 'var(--Rem)',

  // View Width (vw) Based Measurements
  ViewWidthPadding: 'var(--ViewWidthPadding)',

  // Site Grid
  Site: {
    Width: 'var(--SiteWidth)',
  },
  Nav: {
    Size: 'var(--NavSize)',
  },
  Footer: {
    Size: 'var(--FooterSize)',
  },

  Grid: {
    // Universal padding from the edge of the browser
    // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de
    Gutter: {
      Top: 'var(--GutterTop)',
      Right: 'var(--GutterRight)',
      Bottom: 'var(--GutterBottom)',
      Left: 'var(--GutterLeft)',
    },
  },

  // Buttons
  Button: {
    Size: 'var(--ButtonSize)',
  },

  // Inputs
  Input: 'var(--InputSize)',

  // Geometry
  Radius: 'var(--Radius)',
};

// Naming & Exporting
Theme.Typography = Typography;
Theme.Root = Root;

export default Theme;
