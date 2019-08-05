// NavigationOverlay Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { createGlobalStyle } from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Keyframe
import { FadeIn } from 'components/core/Transition/Keyframes';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

// The Navigation Container
export const NavigationOverlayStyle = styled.nav`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: ${hexToRGB(Theme.Color.Galaxy, 0.8)};
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 600;
  display: flex;
  flex-direction: column;
  ${FadeIn};
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
  background: ${Theme.Color.White};
  padding: calc(${Root.Size} / 2) calc(${Root.Size} / 6) calc(${Root.Size} / 2)
    calc(${Root.Size} / 2);

  .inner {
    flex: 1;
    display: flex;
    flex-direction: column;

    .top {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      ${FadeIn};

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
          transform: rotate(-180deg);
        }

        &:hover {
          background: rgba(0, 0, 0, 0.02);
        }

        &:active {
          background: rgba(0, 0, 0, 0.04);
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
          color: ${Theme.Color.Deepsea};
        }
      }

      .col-list {
        flex: 1;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        padding: calc(${Root.Size} / 2) 0 0 0;
        ${FadeIn};

        /* Large Focus Links */

        .focus-links {
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

            a {
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0 calc(${Root.Size} / 4) 0 calc(${Root.Size} / 2);
              font-weight: bold;
              font-size: calc(${Root.Size} / 2);
              line-height: 0;
              text-decoration: none;
              border-radius: 99px 8px 8px 99px;
              background: rgba(0, 0, 0, 0);

              /* Stupid font repositioning to center it */
              .label {
                position: relative;
                top: 3px;
              }

              svg {
                transition: ${Theme.Base.Transition.String};
                transform: translateX(0%);
              }

              &:hover {
                background: rgba(0, 0, 0, 0.02);

                svg {
                  transform: translateX(35%);
                }
              }

              &:active {
                background: rgba(0, 0, 0, 0.04);
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
                background: ${Theme.Color.Ocean};
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
          margin: calc(${Root.Size} / 3) 0;
          height: 1px;
          width: 100%;
          background: rgba(0, 0, 0, 0.04);
        }
      }
    }
  }
`;

NavigationOverlayStyle.Main = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: calc(${Root.Size} * 1.5);

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

      a {
        text-decoration: none;
        color: ${Theme.Color.White};
      }

      li {
        text-align: right;
        cursor: pointer;
        margin-bottom: calc(${Root.Size} / 4);
        ${FadeIn};
        position: relative;
        transform: translateX(0);
        transition: ${Theme.Base.Transition.String};

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
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component
