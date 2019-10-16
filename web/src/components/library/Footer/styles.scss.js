// Footer Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Keyframes
import { FadeIn, FadeOut } from 'components/core/Transition/Keyframes';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

let footerHeight = '80vh';
let footerMinHeight = '800px';

export const FooterStyle = styled.footer`
  width: 100%;
  position: relative;
  height: ${footerHeight};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 20;

  .footer-curve-slice,
  .footer-angle-slice {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: ${footerHeight};
    min-height: ${footerMinHeight};
    z-index: -1;
  }

  .footer-curve-slice {
    opacity: 0.05;
  }

  .inner {
    max-width: ${Root.Site.Width};
    width: 100%;
    margin: 0 auto;
    padding-left: ${Root.Grid.Gutter.Left};
    padding-right: ${Root.Grid.Gutter.Right};
    position: relative;
    display: flex;

    .content {
      display: flex;
      width: 50%;
      justify-content: space-between;
      align-items: flex-end;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        width: 100%;
      }

      .col {
        padding: calc(${Root.Size} * 2) calc(${Root.Size} / 4);

        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          &:first-of-type {
            position: absolute;
            bottom: 100%;
            left: 0;
            width: calc(${Theme.Base.Size.Lg} * 3);
          }
        }

        .brandmark {
          width: calc(${Root.Size} * 2.7);
          height: calc(${Root.Size} * 2.7);
          margin-bottom: calc(${Root.Size} * 4);
        }

        ul {
          display: flex;
          flex-direction: column;

          li {
            display: block;
            margin-bottom: calc(${Root.Size} / 4);

            a {
              font-weight: bold;
              color: ${Theme.Color.Primary};
              position: relative;
              text-decoration: none;
              white-space: nowrap;

              &:before {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: 2px;
                background: ${Theme.Color.Nova};
                transform: scaleX(0);
                transform-origin: bottom left;
                transition: ${Theme.Base.Transition.String};
              }

              &:hover {
                &:before {
                  transform: scaleX(1);
                }
              }
            }
          }

          &.social {
            li {
              a {
                font-weight: bold;
                color: ${Theme.Color.Primary};
                position: relative;
                text-decoration: none;
                transition: transform 0.25s ease;
                transform-origin: center center;
                transform: scale(1);
                display: block;
                padding: calc(${Root.Size} / 8);
                background-color: none;
                border-radius: 50%;

                &:before {
                  display: none;
                }

                &:hover {
                  background: ${Theme.Color.Cream};
                  transform: scale(1.2);
                }
              }

              &:last-of-type {
                a {
                  padding-bottom: 0;
                }
              }
            }
          }
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
