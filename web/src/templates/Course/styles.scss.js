// Course Template Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';
import Btn from 'components/library/Btn';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Hero = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: ${Base.Grid.SiteWidth + 'px'};

  .btn {
    background-color: ${props =>
      (props.bg === Theme.Color.Nova && Theme.Color.Eggplant) ||
      (props.bg === Theme.Color.Sky && Theme.Color.Nova) ||
      (props.bg === Theme.Color.Sunlight && Theme.Color.Ocean) ||
      Theme.Color.Dino};
    border: 0;
    border-radius: 999px;
    color: ${props => (props.textColor ? props.textColor : Theme.Color.White)};
    cursor: pointer;
    outline: 0;
    font-weight: bold;
    text-align: center;
    display: flex;
    position: relative;
    height: calc(${Root.Button.Size} * 1.5);
    line-height: 0;
    justify-content: center;
    align-items: center;
    padding: 4px calc(${Theme.Base.Size.Lg} * 1.5) 0;
    margin-right: 1rem;

    &:hover {
      box-shadow: 0px 0px 0px 3px rgba(93, 99, 118, 0.2);
      text-decoration: none;
    }

    &:last-child {
      margin-right: 0;
    }

    .counter-inner {
      position: relative;
      top: 0px;
      width: 100%;
      text-align: center;
    }
  }

  .hero-tags {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    max-width: ${Theme.Base.Grid.ReadingWidth};
    color: ${props =>
      props.SecondaryColor ? props.SecondaryColor : Theme.Color.White};

    &:first-of-type {
      @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        flex-wrap: nowrap;
        overflow: auto;
        justify-content: flex-start;
        width: 100vw;
        align-self: flex-start;

        li {
          background-color: ${hexToRGB(Theme.Color.White, 0.2)};
          white-space: nowrap;
          border-radius: calc(${Root.Size});
          padding: 0; 
          margin-right: calc(${Root.Size} / 10);
          a {
            display: block;
            padding: calc(${Root.Size} / 5) calc(${Root.Size} / 2) calc(${
         Root.Size
       } / 6) calc(${Root.Size} / 2);
          }
        }
      }
    }

    li {
      text-transform: uppercase;
      letter-spacing: calc(${Root.Size} * 0.05);
      font-weight: 600;
      font-size: 0.8rem;
      padding: 0 calc(${Root.Size} / 6) calc(${Root.Size} / 3);
      text-align: center;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        font-size: 0.9rem;
        padding: 0 calc(${Root.Size} / 6) calc(${Root.Size} * 0);
      }

      a {
        color: ${props =>
          props.SecondaryColor ? props.SecondaryColor : Theme.Color.White};
      }
    }
  }

  .h5 {
    color: ${props =>
      props.SecondaryColor ? props.SecondaryColor : Theme.Color.White};
  }

  a {
    color: ${props =>
      props.PrimaryColor ? props.PrimaryColor : Theme.Color.White};
  }
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

Hero.Headline = styled.h1`
  padding: calc(${Root.Size} / 3) 0;
`;

Hero.Date = styled.span`
  color: ${Theme.Color.Deepsea};
  font-weight: 600;
  padding-bottom: calc(${Root.Size} / 2);
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
  border-left: 1px dashed ${Theme.Color.Primary};
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
    color: ${Theme.Color.White};
    font-weight: 700;
    margin-bottom: 1rem;
    padding: 0 calc(${Theme.Root.Rem} * 0.8);

    a {
      color: ${Theme.Color.White};
    }
  }
`;

export const Toggle = styled(Box)`
  background: ${Theme.Color.White};
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
  justify-content: space-around;
  flex-wrap: wrap;

  a {
    color: ${Theme.Color.Nova};
  }

  .detail-container {
    padding: 0 calc(${Root.Size} / 3);
  }

  &.collapsed {
    max-height: 0;
  }
`;

export const CourseFooter = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .course {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: ${Theme.Base.Grid.ReadingWidth};

    h2 {
      padding: 0 0 calc(${Root.Size} / 3);
    }

    .h5 {
      color: ${props =>  props.SecondaryColor ? props.SecondaryColor : Theme.Color.White };
      font-weight: 600;
      padding-bottom: calc(${Root.Size} / 2);
    }

    .btn {
      background-color: ${props =>
        props.bg === Theme.Color.Nova && Theme.Color.Eggplant ||
        props.bg === Theme.Color.Sky && Theme.Color.Nova ||
        props.bg === Theme.Color.Sunlight && Theme.Color.Ocean ||
        Theme.Color.Dino
      };
      border: 0;
      border-radius: 999px;
      color: ${props =>
        props.textColor ? props.textColor : Theme.Color.White};
      cursor: pointer;
      outline: 0;
      font-weight: bold;
      text-align: center;
      display: flex;
      position: relative;
      height: calc(${Root.Button.Size} * 1.5);
      line-height: 0;
      justify-content: center;
      align-items: center;
      padding: 4px calc(${Theme.Base.Size.Lg} * 1.5) 0;
      margin-right: 1rem;

      &:hover {
        box-shadow: 0px 0px 0px 3px rgba(93, 99, 118, 0.2);
        text-decoration: none;
      }

      &:last-child {
        margin-right: 0;
      }

      .counter-inner {
        position: relative;
        top: 0px;
        width: 100%;
        text-align: center;
      }
    }
  }
`;

CourseFooter.Headline = styled.h2`
  padding: 0 0 calc(${Root.Size} / 3);
`;

CourseFooter.Date = styled.span`
  color: ${Theme.Color.Deepsea};
  font-weight: 600;
  padding-bottom: calc(${Root.Size} / 2);
`;

CourseFooter.Btn = styled.button`
  background-color: ${props =>
    props.bgColor ? props.bgColor : Theme.Color.Nova};
  border: 0;
  border-radius: 999px;
  color: ${props => (props.textColor ? props.textColor : Theme.Color.White)};
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  text-align: center;
  display: flex;
  position: relative;
  height: calc(${Root.Button.Size} * 1.5);
  line-height: 0;
  justify-content: center;
  align-items: center;
  padding: 4px calc(${Theme.Base.Size.Lg} * 1) 0;
  margin-right: 1rem;

  &:hover {
    box-shadow: 0px 0px 0px 3px rgba(93, 99, 118, 0.2);
    text-decoration: none;
  }

  &:last-child {
    margin-right: 0;
  }

  .counter-inner {
    position: relative;
    top: 0px;
    width: 100%;
    text-align: center;
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
