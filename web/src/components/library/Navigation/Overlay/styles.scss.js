/* eslint-disable */
// NavigationOverlay Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { css, keyframes } from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Keyframe
import {
  FadeIn,
  FadeOut,
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

export const navFadeOutDuration = 1000; // milliseconds
export const navFadeOutDurationString = navFadeOutDuration / 1000 + 's'; // for use in css animations

export const MobileNavigationOverlayStyle = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 801;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
  padding: calc(${Theme.Base.Size.Lg});
  align-items: flex-end;
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: flex;
  }
  @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
    padding: calc(${Theme.Base.Size.Lg} / 2);
  }

  &.nav-fadeout {
    animation: ${FadeOut} ${navFadeOutDurationString} ease 0s 1 normal forwards;
  }

  &.focused-menu {
    .mobile-fixed-bottom {
      display: none;
    }
  }

  .mobile-fixed {
    display: flex;
    flex-direction: row;
    pointer-events: all;

    &.mobile-fixed-top {
      display: block;
      width: calc(${Theme.Base.Size.Lg} / 2);
      height: calc(${Theme.Base.Size.Lg} / 2);

      .exit {
        width: calc(${Theme.Base.Size.Lg} / 2);
        height: calc(${Theme.Base.Size.Lg} / 2);
        position: relative;
        cursor: pointer;

        &:focus {
          outline: none;
        }

        &.dark-theme {
          &:before,
          &:after {
            background-color: ${Theme.Color.Eggplant};
          }
        }

        &:before,
        &:after {
          position: absolute;
          content: '';
          height: 1px;
          width: 135%;
          left: 0;
          background-color: ${Theme.Color.White};
        }

        &:before {
          top: 0;
          transform: rotate(45deg);
          transform-origin: top left;
        }

        &:after {
          bottom: 0;
          transform: rotate(-45deg);
          transform-origin: bottom left;
        }
      }
    }
    &.mobile-fixed-bottom {
      width: 100%;
      overflow: auto;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        padding-bottom: calc(${Theme.Base.Size.Lg} / 2);
      }

      .ico {
        justify-content: flex-start;
      }

      svg {
        height: calc(${Theme.Base.Size.Lg} / 2);
        width: auto;
        fill: ${Theme.Color.White};
        @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
          height: calc(${Theme.Base.Size.Lg} / 4);
        }
      }
    }
  }
`;

export const NavigationOverlayStyle = styled.nav`
  position: fixed;
  width: 100vw;
  height: 100vh;
  animation: ${FadeIn} 1s ease 0s 1 normal forwards;
  transition: ${Theme.Base.Transition.String};
  background: ${props =>
    props.theme.primaryColor
      ? hexToRGB(props.theme.primaryColor, 0.8)
      : hexToRGB(Theme.Color.Ocean, 0.8)};
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 800;
  display: flex;
  flex-direction: column;
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    background: ${props =>
      props.theme.primaryColor ? props.theme.primaryColor : Theme.Color.Ocean};
    width: 200vw;
    transform: translateX(-50%);

    &.focused-menu {
      transform: translateX(0%);
    }
  }

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

  &.nav-fadeout {
    animation: ${FadeOut} ${navFadeOutDurationString} ease 0s 1 normal forwards;
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
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    width: 50%;
    min-width: 0;
    padding: calc(${Root.Size} * 1.5) calc(${Root.Size} / 6) calc(${
  Root.Size
} / 2)
    calc(${Root.Size} / 2);
  }
  @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        padding: calc(${Root.Size} * .9) calc(${Root.Size} / 6) calc(${
  Root.Size
} / 2)
    calc(${Root.Size} / 4);
  }

    .inner {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 100%;

      .top {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          display: none;
        }

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
        width: 100%;
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          display: block;
        }

        .col-heading {
          width: ${Root.Size};
          ${FadeIn};
          @media (max-width: ${Base.Media.Width.Md + 'px'}) {
            width: 100%;
          }

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
            @media (max-width: ${Base.Media.Width.Md + 'px'}) {
              font-size: 2vw !important;
              transform: none !important;
              left: 0 !important;
              text-align: center;
            }
            @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
              font-size: 1rem !important;
            }
            color: ${props =>
              props.theme.primaryColor
                ? hexToRGB(props.theme.primaryColor, 0.8)
                : hexToRGB(Theme.Color.Ocean, 0.8)};
          }
        }

        .mobile-back {
          display: none;
          position: absolute;
          top: calc(${Theme.Base.Size.Lg} / 2);
          left: calc(${Theme.Base.Size.Lg} * 0.75);
          margin: calc(${Theme.Base.Size.Lg} / 2) 0;
          transform: rotate(180deg);
          cursor: pointer;
          border-radius: 100%;
          &:after {
            content: "";
            width: ${Theme.Base.Size.Lg};
            height: ${Theme.Base.Size.Lg};
            background-color: transparent;
            transition-duration: .25s;
            position: absolute;
            top: -45%;
            left: -60%;
            border-radius: 50%;
          }

          &:hover {
            
            &:after {
              background-color: ${hexToRGB(Theme.Color.Sunset, 0.2)};
            }
          }

          &:focus {
            outline: none;
          }

          span {
            justify-content: flex-end;
            height: calc(${Theme.Base.Size.Lg} / 2);
            width: calc(${Theme.Base.Size.Lg} / 2);

            svg {
              width: 100%;
              height: 100%;
            }
          }

          @media (max-width: ${Base.Media.Width.Md + 'px'}) {
            display: block;
          }
          @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
            top: 0;
            left: calc(${Theme.Base.Size.Lg} / 4);
          }
        }
      }

      .col-list {
        flex: 1;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        padding: calc(${Root.Size} / 2) 0 0 0;
        width: calc(100% - 60px);
        ${FadeIn};
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          padding-top: calc(${Root.Size} * 1.5);
          width: 100%;
        }
        @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
          padding-top: calc(${Root.Size} / 2);
        }

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
            @media (max-width: ${Base.Media.Width.Md + 'px'}) {
              height: 8vw;
            }
            @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
              height: ${Root.Size};
            }

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
              @media (max-width: ${Base.Media.Width.Md + 'px'}) {
                font-size: 5vw;
              }
              @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
                font-size: calc(${Root.Size} / 2);
              }

              .nav-item {
                display: flex;
                line-height: 0;
                flex: 1;
                align-items: center;
                justify-content: space-between;
                padding: 0 calc(${Root.Size} / 4) 0 calc(${Root.Size} / 2);

                &:focus {
                  outline: none;
                }

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
              color: ${Theme.Color.Sunset};
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
          @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
            margin: 0;
          }
        }

        .program-cards {
          width: 100%;
          position: relative;

          &:after {
            content: "";
            background: linear-gradient( to left, ${
              Theme.Color.White
            }, transparent);
            width: calc(${Theme.Base.Size.Lg} * 1);
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
          }

          .program-cards-inner {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: stretch;
            overflow: auto;
          }

          .card {
            border-radius: 8px;
            min-width: calc(${Theme.Base.Size.Lg} * 2.5);
            height: calc(${Theme.Base.Size.Lg} * 3.5);
            background-color: ${Theme.Color.Sunlight};
            position: relative;
            margin: calc(${Theme.Base.Size.Lg} / 12);
            transition-duration: 0.25s;
            display: block;
            cursor: pointer;

            &:hover {
              text-decoration: none;
              box-shadow: 0px 0px 0px 6px rgba(93,99,118, 0.2)
            }

            .card-inner {
              font-weight: 600;
              color: ${Theme.Color.White};
              overflow: hidden;
              position: relative;
              height: 100%;
              width: 100%;
              border-radius: 8px;
              padding: calc(${Theme.Base.Size.Lg} / 3) calc(${
  Theme.Base.Size.Lg
} / 5);

              .gatsby-image-wrapper {
                position: absolute !important;
                width: 100%;
                bottom: -35%;
                right: -30%;
                transform: scaleX(-1);
              }
            }

            &:nth-of-type(2) {
              background-color: ${Theme.Color.Nova};

              .gatsby-image-wrapper {
                transform: none;
                width: 180%;
                right: -95%;
                bottom: 0;
              }
            }

            &:nth-of-type(3) {
              background-color: ${Theme.Color.Ocean};

              .gatsby-image-wrapper {
                width: 60%;
                bottom: -5%;
                right: -5%;
              }
            }

            &:last-of-type {
              &:after {
                content: "";
                right: calc( ${Theme.Base.Size.Lg} * -1);
                width: ${Theme.Base.Size.Lg};
                position: absolute;
                top: 0;
                height: 100%;
              }
            }
          }
        }

        /* Minor Link Lists */

        .minor-link-list {
          display: flex;
          flex-direction: column;

          li {
            /* margin-bottom: calc(${Root.Size} / 8); */
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
              &:focus {
                outline: none;
              }

              /* Stupid font repositioning to center it */
              .label {
                position: relative;
                top: 3px;
              }
            }

            &.minor-link-subhead {
              font-size: calc(${Root.Size} / 4);
              color: ${Theme.Color.Sunlight};
              font-weight: bold;
              pointer-events: none;
              padding-top: calc(${Root.Size} / 2);
              padding-bottom: calc(${Root.Size} / 4);
              @media (max-width: ${Base.Media.Width.Md + 'px'}) {
                font-size: 1.5vw;
              }
              @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
                font-size: calc(${Root.Size} / 4);
              }
            }

            a {
              flex: 1;
              display: flex;
              align-items: stretch;
              justify-content: space-between;
              font-weight: bold;
              font-size: calc(${Root.Size} / 3.2);
              text-decoration: none;
              background: ${Theme.Color.White};
              padding: calc(${Root.Size} / 6) 0;
              border-radius: 999px 8px 8px 999px;
              @media (max-width: ${Base.Media.Width.Md + 'px'}) {
                font-size: 3vw;
              }
              @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
                font-size: calc(${Root.Size} / 3.2);
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
              color: ${Theme.Color.Primary};
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
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    padding: ${Theme.Base.Size.Lg} ${Theme.Base.Size.Lg}
      calc(${Theme.Base.Size.Lg} * 2) ${Theme.Base.Size.Lg};
  }
  @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
    padding: calc(${Theme.Base.Size.Lg} / 2) calc(${Theme.Base.Size.Lg} / 2)
      calc(${Theme.Base.Size.Lg}) calc(${Theme.Base.Size.Lg} / 2);
  }

  .inner {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      flex-direction: column-reverse;
    }

    .mobile-brandmark {
      display: none;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        display: block;
      }
      @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        position: absolute;
        top: calc(${Theme.Base.Size.Lg} / 6);
        left: calc(${Theme.Base.Size.Lg} / 5);
        height: calc(${Theme.Base.Size.Lg} * 1.5);
        svg {
          height: 100%;
          width: auto;
        }
      }
    }
    .top,
    .bottom {
      display: flex;
      justify-content: flex-end;
      font-size: 4vw;
      font-weight: bold;
      color: ${Theme.Color.White};
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        justify-content: flex-start;
        font-size: 10vw;
      }

      li {
        text-align: right;
        cursor: pointer;
        margin-bottom: calc(${Root.Size} / 4);
        position: relative;
        transform: translateX(0);
        transition: ${Theme.Base.Transition.String};
        ${cascadeSlideUp(10)};
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          text-align: left;
        }

        a {
          text-decoration: none;
          color: ${Theme.Color.White};
        }

        .nav-item {
          display: block;
          //  overflow: hidden;

          &:focus {
            outline: none;
          }
        }

        svg {
          transform: scale(1.4) translate(10px, -5px);
          transform-origin: center center;
          fill: ${Theme.Color.White};

          @media (max-width: ${Base.Media.Width.Md + 'px'}) {
            transform: scale(1);
          }
          @media (max-width: ${Base.Media.Width.Md + 'px'}) {
            height: 4vw;
            width: auto;
          }
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
          @media (max-width: ${Base.Media.Width.Md + 'px'}) {
            content: none;
          }
        }

        &:hover {
          transform: translateX(calc((${Root.Size} / 2) * -1));
          @media (max-width: ${Base.Media.Width.Md + 'px'}) {
            transform: none;
            transition-duration: 0.25s !important;
            color: ${props =>
              props.theme.activeColor
                ? props.theme.activeColor
                : Theme.Color.Galaxy} !important;
          }
        }

        &.active {
          transform: translateX(calc((${Root.Size} / 2) * -1));
          transition: all 0s ease;
          color: ${props =>
            props.theme.activeColor
              ? props.theme.activeColor
              : Theme.Color.Galaxy};
          @media (max-width: ${Base.Media.Width.Md + 'px'}) {
            transform: none;
            color: ${Theme.Color.White};
          }

          a {
            text-decoration: none;
            transition: all 0s ease;
            color: ${props =>
              props.theme.activeColor
                ? props.theme.activeColor
                : Theme.Color.Galaxy};
            @media (max-width: ${Base.Media.Width.Md + 'px'}) {
              color: ${Theme.Color.White};
            }
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
            @media (max-width: ${Base.Media.Width.Md + 'px'}) {
              content: none;
            }
          }
        }
      }
    }

    .top {
      flex-direction: column;
      align-items: flex-end;
      padding-bottom: ${Root.Size};
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        padding-bottom: calc(${Theme.Base.Size.Lg} * 1);
        align-items: flex-start;
      }

      .overlay-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          display: none;
        }

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

    .bottom {
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        flex: 10;
      }
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
  for (let i = 0; i < n + 1; i += 1) {
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
