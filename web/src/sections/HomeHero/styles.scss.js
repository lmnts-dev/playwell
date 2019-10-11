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

export const Item = styled.div`
  background-color: ${props => props.BgColor ? props.BgColor : Theme.Color.White };
  color: ${props => props.TextColor ? props.TextColor : Theme.Color.White };
  min-height: 70vh;
  padding-top: calc(${Theme.Base.Size.Lg} * 3);
  position: relative;

  .bg-image, .gatsby-image-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
  }

  .text {
    width: calc(${Theme.Base.Size.Lg} * 11);
    pointer-events: none;
    padding-bottom: 30vw;
    @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
      padding-bottom: 485px; //which is 30vw at sitewidth
    }

    .h6 {
      font-weight: 700;
      color: ${props => props.SubTextColor ? props.SubTextColor : Theme.Color.White };
    }

    .h2, h2 {
      padding-bottom: calc(${Theme.Base.Size.Lg} / 8);
    }

    a, button, .btn {
      pointer-events: all;
    }

    .btn-inner {
      margin-top: calc(${Theme.Base.Size.Lg} / 2);
    }
  }

  .absolute-curve {
    position: absolute;
    bottom: 0;
    left: 0%;
    width: 100%;
    height: 37vw;
    max-height: 600px; //which is 37vw at sitewidth
    pointer-events: none;

    svg {
      height: 100%;
      width: 100%;
    }
  }
`

export const HeroContainer = styled.div`
  position: relative;
  overflow: hidden;

  .slick-slider {
    margin-bottom: 9vw;
    width: 100%;
    text-align: ${props => props.textAlign};
    @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
      margin-bottom: 145px;
    }

    .slick-slide:not(.slick-active) {
      pointer-events: none;
    }

    .slick-arrow {
      position: absolute;
      top: calc(${Theme.Base.Size.Lg} * 4);
      border-radius: 50%;
      height: calc(${Theme.Base.Size.Lg});
      width: calc(${Theme.Base.Size.Lg});
      transition-duration: 0.5s;
      z-index: 100;

      &:before {
        height: calc(${Theme.Base.Size.Lg} / 3);
        width: calc(${Theme.Base.Size.Lg} / 3);
        border: 1.5px solid ${Theme.Color.White};
        content: '';
        position: absolute;
        top: calc(${Theme.Base.Size.Lg} / 3.5);
        left: calc(${Theme.Base.Size.Lg} / 2.5);
        transform: rotate(45deg);
      }

      &.slick-prev {
        left: calc(calc(calc(100vw - ${Root.Site.Width}) / 2) + 130px);
        @media (max-width: ${Theme.Base.Grid.SiteWidth}) {
          left: 130px;
        }

        @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
          left: 20px;
        }
        &:before {
          border-right-color: transparent;
          border-top-color: transparent;
        }
      }

      &.slick-next {
        left: calc(calc(calc(calc(100vw - ${Root.Site.Width}) / 2) + 240px) + calc(${Theme.Base.Size.Lg} * 11));
        @media (max-width: ${Theme.Base.Grid.SiteWidth}) {
          left: calc(calc(${Theme.Base.Size.Lg} * 11) + 240px);
        }
        @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
          left: calc(calc(${Theme.Base.Size.Lg} * 11) + 100px);
        }

        &:before {
          left: calc(${Theme.Base.Size.Lg} / 4.5);
          border-left-color: transparent;
          border-bottom-color: transparent;
        }
      }
    }
  }

  .absolute-angle {
    position: absolute;
    width: 100%;
    height: 40vw;
    max-height: 650px; //which is 40vw at sitewidth
    bottom: 0;
    left: 0;
    pointer-events: none;

    svg {
      height: 100%;
      width: 100%;
    }
  }
`;


export const Actions = styled(Flex)`
  position: relative;
  padding-top: calc(${Theme.Base.Size.Lg} / 2);

  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
`;

export const HeroBtn = styled.button`
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
  padding: 3px calc(${Theme.Base.Size.Lg} / 2) 0 calc(${Theme.Base.Size.Lg} / 2);
  margin-right: 1rem;

  &:hover {
    box-shadow: 0px 0px 0px 3px rgba(93, 99, 118, 0.2);
    text-decoration: none;

    button {
      text-decoration: none;
    }
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
