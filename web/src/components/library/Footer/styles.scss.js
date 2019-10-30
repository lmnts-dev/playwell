// Footer Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';
import CurveAndAngle from 'components/library/Section/CurveAndAngle';

// Keyframes
import { FadeIn, FadeOut } from 'components/core/Transition/Keyframes';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const OverflowHidden = styled.div`
  overflow: hidden;
`;

export const CurveAndAngleWithPadding = styled(CurveAndAngle)`
  &.curve-and-angle {
    z-index: 19;

    .footer-curve-slice {
      background-color: ${props =>
        props.bgColor ? props.bgColor : Theme.Color.Background};
    }
  }
`;

export const FooterStyle = styled.footer`
  width: 100%;
  height: 100%;
  z-index: 20;
  position: relative;
  background-color: ${Theme.Color.White};
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    padding-bottom: calc(${Theme.Base.Size.Lg} * 2);
  }
  @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
    padding-bottom: calc(${Theme.Base.Size.Lg} * 4);
  }

  .footer-curve-slice {
    /* TODO create prop for a transparent curve */
    /* opacity: 0.05; */
  }

  .basic-inner {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;

    .brandmark-container {
      width: calc(${Root.Size} * 2.7);
      height: calc(${Root.Size} * 2.7);
      @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
        width: calc(${Theme.Base.Size.Lg} * 2);
        height: calc(${Theme.Base.Size.Lg} * 2);
        margin-bottom: calc(${Root.Size} / 2);
      }

      a,
      svg {
        width: 100%;
        height: 100%;
      }
    }

    .content {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      margin-left: calc(${Root.Size} * 2.7);
      @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
        margin-left: 0;
      }

      .col {
        padding: 0 calc(${Root.Size}) calc(${Root.Size} * 1.5)
          calc(${Root.Size} / 4);

        @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
          padding-right: calc(${Root.Size} / 2);
          padding-bottom: calc(${Root.Size} * 1.5);
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
              @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
                font-size: 14px;
              }

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
              margin-bottom: calc(${Theme.Base.Size.Lg} / 8);
              @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
                margin-right: calc(${Theme.Base.Size.Lg} / 8);
              }

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
                width: calc(${Theme.Base.Size.Lg} / 2);
                height: calc(${Theme.Base.Size.Lg} / 2);

                span {
                  height: 100%;
                  width: 100%;

                  svg {
                    width: 100%;
                    height: auto;
                    path {
                      fill: ${Theme.Color.Eggplant};
                    }
                  }
                }

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
                  padding-bottom: 0 !important;
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
