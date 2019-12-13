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

export const Form = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: calc(${Root.Size} * 12);

  .txt-clr-eggplant {
    color: ${Theme.Color.Eggplant};
  }

  .pricing-row {
    display: flex;
    flex-direction: row;
    padding-bottom: calc(${Theme.Base.Size.Lg} / 6);
    span:first-of-type {
      flex: 1;
      color: ${Theme.Color.Sunset};
      font-weight: 700;
      padding-right: calc(${Theme.Base.Size.Lg} / 4);
    }
    span:last-of-type {
      flex: 2;
      color: ${Theme.Color.Eggplant};
      font-weight: 500;
    }
  }

  .vertical {
    display: block;
    text-align: left;
  }

  .radio-group {
    .option-or {
      padding: 0 25px;
      font-weight: 500;
    }

    &.vertical {
      display: flex;
      flex-direction: row;
      align-items: flex-start;

      label {
        width: 47%;
        margin: calc(${Theme.Base.Size.Lg} / 8) 0 calc(${Theme.Base.Size.Lg} / 8) calc(${Theme.Base.Size.Lg} / 6);
        @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
          width: 100%;
        }

        &:first-of-type, &:nth-of-type(2) {
          margin-top: 0;
        }

        &:last-of-type {
          margin-bottom: calc(${Theme.Base.Size.Lg} / 4);
        }
      }
    }

    label {
      font-weight: 500;
      display: block;
      line-height: 25px;
      position: relative;
      padding-left: 35px;
      cursor: pointer;
      user-select: none;
      transition: ${Theme.Base.Transition.String};

      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 25px;
        width: 25px;
        top: 0;
        left: 0;

        /* On mouse-over, add a grey background color */
        &:hover ~ .checkmark {
          background: radial-gradient(${hexToRGB(
            Theme.Color.Sunset,
            0.5
          )} 33%, ${Theme.Color.Blush} calc(33% + 1px));
        }

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
        pointer-events: none;

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
    max-width: calc(${Theme.Base.Size.Lg} * 10);
    margin: 0 auto;
    p {
      padding-bottom: 0;
      padding-top: calc(${Theme.Base.Size.Lg} / 8);
    }
  }

  button {
    background-color: ${Theme.Color.Nova};
    height: ${Root.Button.Size};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    padding: 0 calc(${Theme.Base.Size.Sm} * 0.8);
    border-radius: 999px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    color: ${Theme.Color.White};
    margin: 0;
    box-shadow: 0px 0px 0px 0px rgba(${Theme.Color.Nightysky}, 0);
    transition: all 0s ease;
    line-height: ${Root.Button.Size};
    outline: 0;
    position: relative;
    text-transform: capitalize;
    border: none;

    &:hover {
      text-decoration: none;
      box-shadow: 0px 0px 0px 6px rgba(93,99,118, 0.2);
    }
  }

  fieldset {
    border: none;
    margin: 0 auto;
    width: 100%;
    max-width: calc(${Root.Size} * 11);
    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      padding: 0;
    }

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
        box-shadow: 0 0 15px 3px ${hexToRGB(Theme.Color.Eggplant, 0.2)};
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
        box-shadow: 0 0 15px 3px ${hexToRGB(Theme.Color.Eggplant, 0.2)};
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
        color: ${Theme.Color.Tan};
        padding: 0 5%;
        font-size: 14px;

      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
