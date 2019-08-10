/* eslint-disable */
// NavigationOverlay Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { css, keyframes } from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Keyframe
import {
  FadeIn,
  SlideUp,
  SlideToRight,
  SlideToLeft,
  Rotate,
} from 'components/core/Transition/Keyframes';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// The Navigation Container

export const NavigationOverlayStyle = styled.nav`
  position: fixed;
  width: 100vw;
  height: 100vh;
  animation: ${FadeIn} 1s ease 0s 1 normal forwards;
  transition: ${Theme.Base.Transition.String};
  background: ${props =>
    props.theme.primaryColor
      ? hexToRGB(props.theme.primaryColor, 0.8)
      : hexToRGB(Theme.Color.Ocean, 0.8)} };
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 600;
  display: flex;
  flex-direction: column;
  ${FadeIn};

  &.nav-hidden {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }

  &.nav-visible {
    visibility: visible;
    opacity: 1;
    pointer-events: all;
  }
`;

NavigationOverlayStyle.Inner = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
`;

NavigationOverlayStyle.Sub = styled.div`
  position: relative;
  width: 470px;
  min-width: 380px;
  display: flex;
  flex-direction: column;
  animation: ${SlideToRight} 1s ease 0s 1 normal forwards;
  background: ${Theme.Color.White};
  padding: calc(${Root.Size} / 2) calc(${Root.Size} / 6) calc(${Root.Size} / 2)
    calc(${Root.Size} / 2);
  max-height: 100vh;
  overflow-y: auto;

  .inner {
    flex: 1;
    display: flex;
    flex-direction: column;

    .top {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;

      .top-main {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .brandmark {
          margin-left: calc(${Root.Size} / 2);
        }
      }

      .overlay-close {
        background: rgba(0, 0, 0, 0);
        transform: scale(1.5);
        width: ${Root.Size};
        height: ${Root.Size};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        svg {
          transition: ${Theme.Base.Transition.String};
          transform: rotate(-180deg) translateX(0);
          fill: ${Theme.Color.Primary};
        }

        &:hover {
          background: ${Theme.Color.Cream};
          svg {
            transform: rotate(-180deg) translateX(20%);
          }
        }

        &:active {
          background: ${Theme.Color.Blush};
        }
      }
    }

    .bottom {
      display: flex;
      flex-wrap: nowrap;
      flex: 1;

      .col-heading {
        width: ${Root.Size};
        ${FadeIn};

        span {
          font-size: 7vh;
          font-weight: bold;
          position: relative;
          display: block;
          transform-origin: top left;
          transform: rotate(90deg) translateX(calc(${Root.Size} / 2));
          left: 80%;
          white-space: nowrap;
          pointer-events: none;
          color: ${props =>
            props.theme.primaryColor
              ? hexToRGB(props.theme.primaryColor, 0.8)
              : hexToRGB(Theme.Color.Ocean, 0.8)} };
        }
      }

      .col-list {
        flex: 1;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        padding: calc(${Root.Size} / 2) 0 0 0;
        ${FadeIn};

        /* Large Focus Link List */

        .focus-link-list {
          display: flex;
          flex-direction: column;

          li {
            border-radius: 99px 8px 8px 99px;
            height: ${Root.Size};
            margin-bottom: calc(${Root.Size} / 4);
            display: flex;
            align-items: stretch;
            justify-content: space-between;
            overflow: hidden;
            ${cascadeSlideToLeft(10)}

            a {
              flex: 1;
              display: flex;
              align-items: stretch;
              justify-content: space-between;
              font-weight: bold;
              font-size: calc(${Root.Size} / 2);
              line-height: 0;
              text-decoration: none;
              border-radius: 99px 8px 8px 99px;
              background: rgba(0, 0, 0, 0);
              overflow: hidden;

              .nav-item {
                display: flex;
                line-height: 0;
                flex: 1;
                align-items: center;
                justify-content: space-between;
                padding: 0 calc(${Root.Size} / 4) 0 calc(${Root.Size} / 2);

                /* Stupid font repositioning to center it */
                .label {
                  position: relative;
                  top: 3px;
                }
              }

              svg {
                transition: ${Theme.Base.Transition.String};
                transform: translateX(0%);
              }

              &:hover {
                background: ${Theme.Color.Cream};

                svg {
                  transform: translateX(35%);
                }
              }

              &:active {
                background: ${Theme.Color.Blush};
              }
            }

            a,
            svg {
              color: ${Theme.Color.Sunlight};
              fill: ${Theme.Color.Sunlight};
            }

            /* Call to Action Link on Overlay Style */

            &.focus {
              a {
                background: ${props =>
                  props.theme.activeColor
                    ? props.theme.activeColor
                    : Theme.Color.Galaxy};
                color: ${Theme.Color.White};
              }

              svg {
                fill: ${Theme.Color.White};
              }
            }
          }
        }

        /* Line Separator */
        .line-break {
          padding: 0;
          margin: calc(${Root.Size} / 3) 0 calc(${Root.Size} / 2) 0;
          height: 1px;
          width: 100%;
          background: rgba(0, 0, 0, 0.04);
        }

        /* Minor Link Lists */

        .minor-link-list {
          display: flex;
          flex-direction: column;

          li {
            margin-bottom: calc(${Root.Size} / 8);
            display: flex;
            align-items: stretch;
            justify-content: space-between;
            overflow: hidden;
            ${cascadeSlideToLeft(10)}

            .nav-item {
              display: flex;
              flex: 1;
              align-items: center;
              justify-content: space-between;
              padding: 0 calc(${Root.Size} / 4) 0 calc(${Root.Size} / 2);

              /* Stupid font repositioning to center it */
              .label {
                position: relative;
                top: 3px;
              }
            }

            &.minor-link-subhead {
              font-size: calc(${Root.Size} / 4);
              color: ${Theme.Color.Lilac};
              font-weight: bold;
              pointer-events: none;
            }

            a {
              flex: 1;
              display: flex;
              align-items: stretch;
              justify-content: space-between;
              font-weight: bold;
              font-size: calc(${Root.Size} / 3);
              text-decoration: none;
              background: ${Theme.Color.White};
              padding: calc(${Root.Size} / 6) 0;
              border-radius: 999px 8px 8px 999px;

              svg {
                transition: ${Theme.Base.Transition.String};
                transform: translateX(0%);
              }

              &:hover {
                background: ${Theme.Color.Cream};

                svg {
                  transform: translateX(35%);
                }
              }

              &:active {
                background: ${Theme.Color.Blush};
              }
            }

            a,
            svg {
              color: ${Theme.Color.Galaxy};
              fill: ${Theme.Color.Galaxy};
            }
          }
        }
      }
    }
  }
`;

//// The main, larger link navigation

// The styles
NavigationOverlayStyle.Main = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: calc(${Root.Size} / 1.25) calc(${Root.Size} * 1.5);

  .inner {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .top,
    .bottom {
      display: flex;
      justify-content: flex-end;
      font-size: 5vw;
      font-weight: bold;
      color: ${Theme.Color.White};

      li {
        text-align: right;
        cursor: pointer;
        margin-bottom: calc(${Root.Size} / 4);
        position: relative;
        transform: translateX(0);
        transition: ${Theme.Base.Transition.String};
        ${cascadeSlideUp(10)};

        a {
          text-decoration: none;
          color: ${Theme.Color.White};
        }

        .nav-item {
          display: block;
          overflow: hidden;
        }

        svg {
          transform: scale(1.4) translateY(-5px);
          transform-origin: center center;
          fill: ${Theme.Color.White};
        }

        &:before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          background: ${Theme.Color.White};
          transform: translateX(calc(100% + (${Root.Size} * 1.5)));
          transition: ${Theme.Base.Transition.String};
        }

        &:hover {
          transform: translateX(calc((${Root.Size} / 2) * -1));
        }

        &.active {
          transform: translateX(calc((${Root.Size} / 2) * -1));
          transition: all 0s ease;
          color: ${props =>
            props.theme.activeColor
              ? props.theme.activeColor
              : Theme.Color.Galaxy};

          a {
            text-decoration: none;
            transition: all 0s ease;
            color: ${props =>
              props.theme.activeColor
                ? props.theme.activeColor
                : Theme.Color.Galaxy};
          }

          &:after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            background: ${props =>
              props.theme.activeColor
                ? props.theme.activeColor
                : Theme.Color.Galaxy};
            transform: translateX(calc(100% + (${Root.Size} * 1.5)));
            transition: all 0s ease;
          }
        }
      }
    }

    .top {
      flex-direction: column;
      align-items: flex-end;

      .overlay-icon {
        display: flex;
        align-items: center;
        justify-content: center;

        .ico {
          width: 17vh;
          height: 17vh;
          animation: ${Rotate} 20s infinite linear;

          svg {
            fill: none;
            stroke: ${Theme.Color.White};
            stroke-width: 1px;
            stroke-dashoffset: 5px;
            stroke-dasharray: 5px;
            transition: all 20s ease;

            &:hover {
              stroke-dashoffset: 0px;
              stroke-dasharray: 300px;
            }
          }
        }
      }
    }

    .top {
      padding-bottom: ${Root.Size};
    }
  }
`;

// Keyframes
//////////////////////////////////////////////////////////////////////

// The loop to iteratively create cascading animation keyframes for SlideUp
function cascadeSlideUp(n) {
  // Define the aniimation
  const SlideUpAnimation = i => css`
    animation: ${SlideUp} ${i + 1}s ease 0s 1 normal forwards;
  `;

  // Create our empty array.
  let anim = [];

  // Run the loop.
  for (let i = 0; i < n; i += 1) {
    anim[i] = css`
      &:nth-child(${i + 1}) {
        .nav-item {
          .label {
            display: inline-block;
            ${SlideUpAnimation(i / 2)}
          }
        }
      }
    `;
  }

  // Return the array.
  return anim;
}

// The loop to iteratively create cascading animation keyframes for SlideToLeft
function cascadeSlideToLeft(n) {
  // Define the aniimation
  const SlideToLeftAnimation = i => css`
    animation: ${SlideToLeft} ${i + 1}s ease 0s 1 normal forwards;
  `;

  // Create our empty array.
  let anim = [];

  // Run the loop.
  for (let i = 0; i < n; i += 1) {
    anim[i] = css`
      &:nth-child(${i + 1}) {
        .nav-item {
          ${SlideToLeftAnimation(i / 2)}
        }
      }
    `;
  }

  // Return the array.
  return anim;
}

//////////////////////////////////////////////////////////////////////
// End Component
