/* eslint-disable */

// Base.js:
// Core measurements throughout the app.

export const Base = {
  // Core Base Measurement
  Size: {
    Lg: 60,
    Md: 45,
    Sm: 25,
  },

  // Root Element Measurement
  Rem: {
    Lg: 14, // px
    Md: 16, // px
    Sm: 18, // px
  },

  // Responsive Breakpoints
  Media: {
    Width: {
      Lg: 992, // px
      Md: 768, // px
      Sm: 376, // px
    },
    Height: {
      Lg: 828, // px
      Md: 640, // px
      Sm: 568, // px
    },
  },

  // Site Grid
  Grid: {
    SiteWidth: 1620, // px
    Nav: {
      Size: {
        Lg: 81, // px
        Md: 60, // px
        Sm: 55, // px
      },
    },

    Footer: {
      Size: {
        Lg: 35, // px
        Md: 35, // px
        Sm: 35, // px
      },
    },

    // Universal padding from the edge of the browser
    // Read more: https://read.compassofdesign.com/guides-gutters-and-grids-2ce6092fc3de
    Gutter: {
      Lg: {
        Top: 20, // px
        Bottom: 20, // px
        Right: 20, // px
        Left: 20, // px
      },
      Md: {
        Top: 45, // px
        Bottom: 45, // px
        Right: 45, // px
        Left: 45, // px
      },
      Sm: {
        Top: 20, // px
        Bottom: 20, // px
        Right: 25, // px
        Left: 25, // px
      },
    },
  },

  // View Width (vw) Based Measurements
  ViewWidth: {
    Padding: {
      Sm: '4.5', // vw
      Md: '4.5', // vw
      Lg: '1.2', // vw
    },
  },

  // Buttons
  Button: {
    Lg: 44, // px
    Md: 35, // px
    Sm: 35, // px
  },

  // Inputs
  Input: {
    Lg: 44, // px
    Md: 35, // px
    Sm: 35, // px
  },

  // Transitions
  Transition: {
    String: 'all 0.25s ease',
    Duration: 0.25, // seconds
    Ease: [0.29, 0.77, 0.57, 0.85], // Cubic Bezier Ease
    Page: 2000, // milliseconds. Try to not go lower than 350ms or it gets buggy. TODO.
  },

  // Geometry
  Geometry: {
    Radius: 15, // px
  },
};
