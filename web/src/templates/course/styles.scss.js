// SplitHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';
import { Box, Flex, Text } from 'components/library/Elements';

// Keyframe
import {
  FadeIn,
  FadeOut,
  SlideUp,
  SlideToRight,
  SlideToLeft,
  Rotate,
} from 'components/core/Transition/Keyframes';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Hero = styled.div``;

Hero.Avatar = styled.div`
  width: 130px;
  height: 130px;
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
    padding: 0 calc(${props => props.theme.Root.Rem} * 1);
    margin-bottom: calc(${props => props.theme.Root.Rem} * 0.8);
    text-align: @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
      font-size: 0.9rem;
      padding: 0 calc(${props => props.theme.Root.Rem} * 0);
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
  text-align: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

Section.Overlay = styled(Box)`
  background: ${p => p.bgOverlay};
`;

Section.Inner = styled(Flex)``;

export const Lead = styled(Text)`
  text-align: center;
  font-weight: 400;
`;

export const Spacer = styled(Flex)`
  position: relative;
  justify-content: center;
`;

Spacer.Line = styled.span`
  width: 0;
  height: 100px;
  position: absolute;
  bottom: -50px;
  border-left: 1px dashed ${p => p.theme.Color.Primary};
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

export const Collapse = styled(Box)`
  background: ${p => p.theme.Color.White};
  border-top: 1px solid #eaeaea;
  cursor: pointer;
  text-align: center;

  /* &:hover {
    background: ${p => p.theme.Color.Cream};
  } */
`;

export const Drawer = styled(Flex)`
  overflow: hidden;
  transition: max-height 0.4s ease-out;
  height: auto;
  max-height: 600px;

  &.collapsed {
    max-height: 0;
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles