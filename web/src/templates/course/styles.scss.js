// SplitHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';
import { Box, Flex } from 'components/library/Elements';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Hero = styled.div``;
Hero.Avatar = styled.div`
  width: 120px;
  height: 120px;
  background: white;
  border-radius: 99rem;
  box-shadow: 0 9px 27px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

Hero.Headline = styled.h3`
  margin-top: calc(${props => props.theme.Root.Size} * 0.4);
`;

Hero.Tags = styled(Flex)`
  margin-top: calc(${props => props.theme.Root.Size} * 0.4);
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  max-width: calc(${props => props.theme.Root.Size} * 13);

  li {
    color: ${props => props.theme.Color.Nightsky};
    text-transform: uppercase;
    letter-spacing: calc(${props => props.theme.Root.Size} * 0.05);
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
