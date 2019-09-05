// SplitHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';
import { Box, Flex, Text } from 'components/library/Elements';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Hero = styled.div``;

Hero.Avatar = styled.div`
  width: 120px;
  height: 120px;
  background: white;
  border-radius: 99rem;
  box-shadow: 0 9px 27px rgba(0, 0, 0, 0.1);
  margin: 0 auto calc(${props => props.theme.Root.Rem} * 2);

  @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
    margin: 0 auto calc(${props => props.theme.Root.Rem} * 3);
  }
`;

Hero.Headline = styled.h3``;

Hero.Tags = styled(Flex)`
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  max-width: calc(${props => props.theme.Root.Size} * 13);

  li {
    color: ${p => p.theme.Color.Deepsea};
    text-transform: uppercase;
    letter-spacing: calc(${props => props.theme.Root.Size} * 0.05);
    font-weight: 500;
    font-size: 0.8rem;
    padding: 0 calc(${props => props.theme.Root.Rem} * 0.4);
    margin-bottom: calc(${props => props.theme.Root.Rem} * 0.8);

    @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
      font-size: 0.9rem;
    }
  }
`;

Hero.Date = styled(Text)`
  color: ${props => props.theme.Color.Deepsea};
  font-weight: 300;
`;

export const Section = styled(Flex)`
  text-align: center;
  background-image: url('${props => props.bgImage}');
  background-size: cover;
  background-position: center center;
`;

Section.Overlay = styled(Box)`
  background: ${p => p.bgOverlay};
`;

Section.Inner = styled(Flex)`
  flex-wrap: wrap;
`;

export const Lead = styled(Text)`
  text-align: center;
  font-weight: 400;
`;

export const Spacer = styled.div`
  width: 1px;
  height: 100px;
  background-color: black;
  position: absolute;
  bottom: -50px;
`;

export const QuestionsNav = styled(Flex)`
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;

  @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
    justify-content: space-between;
  }

  li {
    color: ${props => props.theme.Color.White};
    font-weight: 700;
    margin-bottom: 1rem;
    padding: 0 calc(${props => props.theme.Root.Rem} * 0.8);
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
