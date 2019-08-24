// Footer Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Keyframes
import { FadeIn, FadeOut } from 'components/core/Transition/Keyframes';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

let footerHeight = '80vh';

export const FooterStyle = styled.footer`
  width: 100%;
  position: relative;
  height: ${footerHeight};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .footer-curve-slice,
  .footer-angle-slice {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: ${footerHeight};
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

      .col {
        padding: calc(${Root.Size} * 2) calc(${Root.Size} / 4);

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
                  background-color: ${hexToRGB(Theme.Color.Black, 0.05)};
                  transform: scale(1.2);
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
