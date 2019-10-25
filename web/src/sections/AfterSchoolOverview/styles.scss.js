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

export const Container = styled.div`
  font-weight: 700;
  margin: 0 auto;
  position: relative;
  max-width: calc(${Root.Size} * 11);

  @media (min-width: ${Base.Media.Width.Md + 'px'}) {
    max-width: calc(${Root.Size} * 12);
  }

  @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
    max-width: calc(${Root.Size} * 15);
  }

  span {
    width: 100%;
    display: block;
  }

  .headline {
    color: ${Theme.Color.Blush};
    /* padding: calc(${Root.Size} / 4) 0; */
  }

  .lead {
    color: ${Theme.Color.Sunset};
    padding-bottom: calc(var(--Size) / 3.5);

    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      font-size: 1.75rem;
    }
  }

  ul {
    padding-bottom: calc(var(--Size) / 3.5);
    
    li {
      a {
        color: ${Theme.Color.Primary};
        transition: ${Theme.Base.Transition.String};
        /* text-decoration: none !important; */
        font-size: 2.5rem;

        @media (min-width: ${Base.Media.Width.Md + 'px'}) {
          font-size: 4rem;
        }

        @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
          font-size: 5rem;
        }

        &:hover {
          /* color: ${hexToRGB(Theme.Color.Primary, 0.7)}; */
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
