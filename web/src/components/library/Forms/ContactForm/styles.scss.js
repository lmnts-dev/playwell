// ContactForm Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Components
import { Box, Flex, Text } from 'components/library/Elements';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: calc(${Root.Size} * 12);

  .radio-group {
    label {
      font-weight: 500;
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      user-select: none;
      transition: ${Theme.Base.Transition.String};

      /* On mouse-over, add a grey background color */
      &:hover input ~ .checkmark {
        background-color: ${Theme.Color.Sunset};
      }

      input {
        /* position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0; */

        &:checked ~ .checkmark {
          background-color: ${Theme.Color.Blush};

          /* Show the indicator (dot/circle) when checked */
          &:after {
            display: block;
          }
        }
      }

      /* Create a custom radio button */
      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: ${Theme.Color.Blush};
        border-radius: 50%;

        /* Create the indicator (the dot/circle - hidden when not checked) */
        &:after {
          content: '';
          position: absolute;
          display: none;
        }
      }

      /* Style the indicator (dot/circle) */
      .checkmark:after {
        top: 6px;
        left: 6px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: ${Theme.Color.Sunset};
      }
    }
  }

  legend {
    color: ${Theme.Color.Dino};
    font-weight: 600;
    padding-bottom: calc(${Root.Size} * 1);
    width: 100%;
  }

  fieldset {
    border: none;
    margin: 0 auto;
    width: 100%;
    max-width: calc(${Root.Size} * 11);

    label {
      display: none;
    }

    input,
    textarea,
    select {
      background: ${Theme.Color.Blush};
      color: ${Theme.Color.Primary};
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 2.5;
      margin: 0;
      padding: 0;
      width: 100%;
      padding: 0 calc(${Root.Size} / 2.5);

      &:focus {
        box-shadow: 0 0 20px 3px ${Theme.Color.Sunset};
        box-shadow: 0 0 0 3px -moz-mac-focusring;
        outline: none;
      }

      &::placeholder {
        color: ${hexToRGB(Theme.Color.Primary, 0.4)};
      }
    }

    input {
      border-radius: 999px;
      border: none;
    }

    textarea {
      border-radius: 7px;
      border: none;
    }

    select {
      appearance: none;
      box-sizing: border-box;
      border: none;
      border-radius: 999px;
      cursor: pointer;
      display: block;
      margin: 0;
      width: 100%;
      max-width: 100%;
      transition: ${Theme.Base.Transition.String};

      option:first {
        color: ${hexToRGB(Theme.Color.Primary, 0.4)};
      }

      &::-ms-expand {
        display: none;
      }

      &:focus {
        box-shadow: 0 0 20px 3px ${Theme.Color.Sunset};
        box-shadow: 0 0 0 3px -moz-mac-focusring;
        outline: none;
      }

      option {
        font-weight: normal;
      }
    }

    div,
    .form-group {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding-bottom: calc(${Root.Size} / 3);

      &__box {
        padding-bottom: calc(${Root.Size} / 3);

        &:last-child {
          padding-bottom: 0;
          padding-left: 0;

          @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
            padding-left: calc(${Root.Size} / 3);
          }
        }

        @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
          padding-bottom: 0;
        }

        &--select {
          position: relative;
          display: flex;
          align-items: center;

          .carat {
            display: flex;
            align-items: center;
            justify-content: center;
            border-left: 1px solid ${hexToRGB(Theme.Color.Dino, 0.2)};
            line-height: 1.6;
            padding-left: calc(${Root.Size} / 6);
            position: absolute;
            right: calc(${Root.Size} / 4);

            .ico-carat {
              position: relative;
              transform: rotate(90deg) scale(0.6);
              transform-origin: center center;

              polygon,
              svg,
              g {
                fill: ${Theme.Color.Primary};
              }
            }
          }
        }
      }

      .form-heading {
        display: block;
        font-weight: 500;
        padding-bottom: calc(${Root.Size} / 3.5);
        text-align: left;
        width: 100%;
      }
    }

    .footnote {
      padding-top: calc(${Root.Size} / 2);
      padding-bottom: 0;

      p {
        color: ${Theme.Color.Dino};
        padding: 0 5%;
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
