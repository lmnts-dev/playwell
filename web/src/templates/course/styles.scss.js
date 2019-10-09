// SplitHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Hero = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: ${Base.Grid.SiteWidth};
`;

Hero.Avatar = styled.div`
  width: 130px;
  height: 130px;
  background: white;
  /* clip-path: circle(50%); <--- this clips the shadow so using border radius instead */
  border-radius: 99rem;
  box-shadow: 0 9px 27px rgba(0, 0, 0, 0.1);
  margin: 0 auto calc(${props => props.theme.Root.Rem} * 2);
  overflow: hidden;

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
    text-align: center;

    @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
      font-size: 0.9rem;
      padding: 0 calc(${props => props.theme.Root.Rem} * 0);
    }

    a {
      color: ${p => p.theme.Color.Deepsea};
    }
  }
`;

Hero.Date = styled(Text)`
  color: ${p => p.theme.Color.Deepsea};
  font-weight: 300;
`;

export const CalloutSection = styled(Flex)`
  text-align: center;
  background-image: url('${p => p.bgImage}');
  background-size: cover;
  background-position: center center;
  text-align: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

CalloutSection.Overlay = styled(Box)`
  background: ${p => p.bgOverlay};
`;

CalloutSection.Inner = styled(Flex)``;

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
  z-index: 9;
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
    color: ${p => p.theme.Color.White};
    font-weight: 700;
    margin-bottom: 1rem;
    padding: 0 calc(${props => props.theme.Root.Rem} * 0.8);

    a {
      color: ${p => p.theme.Color.White};
    }
  }
`;

export const Toggle = styled(Box)`
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
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  &.collapsed {
    max-height: 0;
  }
`;

export const CourseFooter = styled(Section)`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

CourseFooter.Course = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${p => p.theme.Base.Grid.ReadingWidth};
`;

//////////////////////////////////////////////////////////////////////
// End Styles
