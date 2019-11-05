// <LocationHero /> Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Components
import { Box, Flex, Text } from 'components/library/Elements';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: calc(${Root.Size} * 12);

  fieldset {
    border: none;
    margin: 0 auto;
    width: 100%;
    max-width: calc(${Root.Size} * 11);

    .flex {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      div {
        flex-grow: 2;
        width: 100%;

        @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
          width: initial;
        }

        &:last-child {
          flex-grow: 1;
          margin-top: calc(${Root.Size} / 4);
          margin-left: 0;

          @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
            margin-top: 0;
            margin-left: calc(${Root.Size} / 4);
            width: 0%;
          }

          .btn {
            color: ${Theme.Color.White};
            background: ${Theme.Color.Nova};
            box-shadow: 0px 12px 22px ${hexToRGB('#510689', 0.4)};
            transition: ${Theme.Base.Transition.String};
            cursor: pointer;

            &:hover,
            &:active {
              background: ${hexToRGB(Theme.Color.Primary, 0.9)};
              box-shadow: 0px 10px 32px ${hexToRGB('#510689', 0.4)};
            }
          }

          .btn-inner {
            width: 100%;
          }
        }
      }
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

    .errors {
      font-weight: 500;
      color: ${Theme.Color.Warning};
      padding-top: calc(${Root.Size} / 2);
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
