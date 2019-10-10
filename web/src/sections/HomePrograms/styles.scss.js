// Homepage Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const AccordianFeature = styled.div`
  padding-right: calc(${Root.Size} / 1);
  padding-left: calc(${Root.Size} / 1);
  
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: calc(${Root.Size} / 3);

    li {
      font-weight: 700;
      padding: calc(${Root.Size} / 6);

      &:first-of-type {
        padding-left: 0;
      }

      &:last-of-type {
        padding-right: 0;
      }

      a {
        color: ${Theme.Color.Sunset};

        &:visited {
          color: ${Theme.Color.Sunset};
        }
      }
    }
  }

  .container {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;

    .image-accordian {
      flex: 1;

      &:nth-of-type(2) {
        margin: 0 calc(${Root.Size} / 2);
      }
    }
  }

  .footer-angle-slice {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 20vw;
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
