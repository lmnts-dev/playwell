// PageTheme.js:
// This is for individual Page theming.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import { createGlobalStyle } from 'styled-components';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const PageThemeStyle = createGlobalStyle`
  body {
      /* -webkit-transform-style: preserve-3d; */
      /* -webkit-backface-visibility: hidden; */
      background-color: snow;
      transition: all .25s ease;
  };

  
  nav {
    &.nav-bar {


      .nav-inner:not(.scroll) {
        .nav-primary {
          .linklist {
            li {
              button {
                color: ${props =>
                  props.PrimaryColor
                    ? props.PrimaryColor != 'unset'
                      ? props.PrimaryColor
                      : false
                    : false};
              }
            }
          }
        }

        .mobile-nav {
          .hamburger {
            div, div:before, div:after { {
              background-color: ${props =>
                props.PrimaryColor
                  ? props.PrimaryColor != 'unset'
                    ? props.PrimaryColor
                    : false
                  : false};
            }
          }
        }

        .nav-secondary {
          .btn {
            .btn-inner {
              span, .ico, i, .fas, svg {
                color: ${props =>
                  props.PrimaryColor
                    ? props.PrimaryColor != 'unset'
                      ? props.PrimaryColor
                      : false
                    : false};
                fill: ${props =>
                  props.PrimaryColor
                    ? props.PrimaryColor != 'unset'
                      ? props.PrimaryColor
                      : false
                    : false};
              }

              &.btn-border {
                border-color: ${props =>
                  props.PrimaryColor
                    ? props.PrimaryColor != 'unset'
                      ? props.PrimaryColor
                      : props.PrimaryColor
                    : false};
              }
            }
          }
        }

        .brandmark {
          .well-gear {
            transition: all .25s ease;
            fill: ${props =>
              props.BgColor == Theme.Color.Nova
                ? Theme.Color.White
                : Theme.Color.Nova};
          }
          .well-text {
            transition: all .25s ease;
            fill: ${props =>
              props.BgColor == Theme.Color.Nova
                ? Theme.Color.Nova
                : Theme.Color.White};
          }
          .bottom-arrow {
            transition: all .25s ease;
            fill: ${props =>
              props.BgColor == Theme.Color.Nova
                ? Theme.Color.White
                : Theme.Color.Nova};
          }

          .play-gear {
            transition: all .25s ease;
            fill: ${props =>
              props.BgColor == Theme.Color.Eggplant ||
              Theme.Color.Primary ||
              Theme.Color.Deepsea
                ? Theme.Color.White
                : Theme.Color.Primary};
          }
          .play-text {
            transition: all .25s ease;
            fill: ${props =>
              props.BgColor == Theme.Color.Eggplant ||
              Theme.Color.Primary ||
              Theme.Color.Deepsea
                ? Theme.Color.Primary
                : Theme.Color.Primary};
          }
          .top-arrow {
            transition: all .25s ease;
            fill: ${props =>
              props.BgColor == Theme.Color.Eggplant ||
              Theme.Color.Primary ||
              Theme.Color.Deepsea
                ? Theme.Color.White
                : Theme.Color.Primary};
          }
        }
      }
    }
  }



/* Footer */
footer {
    span {
      /* Color */
      color: ${props =>
        props.SecondaryColor
          ? props.SecondaryColor + ' !important'
          : 'inherit'};
    }
  }

  /* Footer Slice */
  .curve-and-angle {
    background-color:  ${props =>
      props.BgColor ? props.BgColor : Theme.Color.Background};
  }

`;

const PageTheme = ({
  BgColor,
  PrimaryColor,
  SecondaryColor,
  TertiaryColor,
}) => (
  <PageThemeStyle
    BgColor={BgColor}
    PrimaryColor={PrimaryColor}
    SecondaryColor={SecondaryColor}
    TertiaryColor={TertiaryColor}
  />
);

export default PageTheme;

//////////////////////////////////////////////////////////////////////
// End Component
