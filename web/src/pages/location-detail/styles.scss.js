// Homepage Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Components
import Btn from 'components/library/Btn';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Hero = styled(Box)`
  background: ${Theme.Color.Background};
  padding-top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 2);
  padding-bottom: calc(${Theme.Root.Size} * 2);
  text-align: left;
`;

Hero.Inner = styled(Box)`
  width: 100%;
  max-width: ${Theme.Base.Grid.SiteWidth};
  margin: 0 auto;
  position: relative;
  padding-right: ${Root.Grid.Gutter.Right};
  padding-left: ${Root.Grid.Gutter.Left};
  overflow-x: visible;

  @media (min-width: ${Base.Media.Width.Md + 'px'}) {
  }
`;

Hero.Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: calc(${Theme.Root.Size} / 8);

  li {
    /* display: inline-block; */
    color: ${p => p.theme.Color.Deepsea};
    text-transform: uppercase;
    letter-spacing: calc(${Theme.Root.Size} * 0.05);
    font-weight: 500;
    font-size: 0.8rem;
    padding: 0 calc(${Theme.Root.Rem} * 1);
    margin-bottom: calc(${Theme.Root.Rem} * 0.8);

    @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
      font-size: 0.9rem;
      padding: 0 calc(${Theme.Root.Rem} * 0);
    }

    &:after {
      content: '—';
      color: ${Theme.Color.Sunset};
      margin: 0 calc(${Theme.Root.Size} / 6);
    }

    &:last-child {
      
      &:after {
        content: '';
      }
    }

    a {
      color: ${Theme.Color.Primary};
    }
  }
`;

Hero.Heading = styled.h2`
  color: ${Theme.Color.Primary};

  span {
    color: ${Theme.Color.Nova};
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
