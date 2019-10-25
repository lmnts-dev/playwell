// AfterSchoolOverview Styles:

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
  width: 100%;
  max-width: calc(${Root.Size} * 12);
  margin: 0 auto;

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
      color: ${Theme.Color.Dino};
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 2.5;
      margin: 0;
      padding: 0;
      width: 100%;

      &::placeholder {
        color: ${hexToRGB(Theme.Color.Dino, 0.6)};
      }
    }

    input {
      border-radius: 999px;
      border: none;
      padding: 0 calc(${Root.Size} / 2.5);
    }

    textarea {
      border-radius: 7px;
      border: none;
      padding: 0 calc(${Root.Size} / 2.5);
    }

    div {
      padding-bottom: calc(${Root.Size} / 3);

      div {
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
      }

      span {
        display: block;
        font-weight: 500;
        padding-bottom: calc(${Root.Size} / 3.5);
        text-align: left;
        width: 100%;
      }

      &.flex {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        p {
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
