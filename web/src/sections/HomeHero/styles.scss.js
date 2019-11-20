// Homepage Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';
import { Box, Flex, Text } from 'components/library/Elements';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const AbsoluteDecor = styled.div`
  position: absolute;
  width: 100%;
  height: 0 !important;
  padding-top: 100%;
  bottom: 0;
  left: 0;
  z-index: 2;
  max-width: ${Root.Site.Width};
  @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
    padding-top: ${Root.Site.Width};
    margin: 0 calc(50% - calc(${Root.Site.Width} / 2));
  }

  .decor-container {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    height: auto;

    .ico {
      width: 100%;
      height: auto;
    }

    &.absolute-cloud-big {
      width: 20%;
      right: -6%;
      left: auto;
      bottom: 40%;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        width: 24%;
        bottom: 44%;
      }
    }

    &.absolute-cloud-small {
      width: 12%;
      left: -2%;
      bottom: 32%;
      @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
        left: -5%;
      }
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        width: 15%;
        bottom: 40%;
      }
    }

    &.absolute-waterfall {
      width: 35%;
      left: auto;
      right: 1%;
      bottom: 6%;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        width: 45%;
        bottom: 2%;
      }
    }

    &.absolute-volcano {
      width: 22%;
      left: 40%;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        width: 30%;
        left: 11%;
        bottom: 12%;
      }
    }

    &.absolute-ladder {
      width: 4%;
      left: auto;
      right: 10.5%;
      bottom: 31%;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        bottom: 34%;
        right: 14%;
        width: 5%;
      }
    }

    &.absolute-legos {
      width: 13%;
      left: 61%;
      bottom: -2%;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        width: 20%;
        left: 33%;
        bottom: 4%;
      }
    }

    &.absolute-lego {
      width: 6%;
      left: 58%;
      bottom: 19%;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        width: 10%;
        left: 43%;
        bottom: 27%;
      }
    }

    &.absolute-gears {
      width: 30%;
      left: auto;
      right: -1%;
      transform: scaleX(-1);
    }

    &.absolute-lego-ladder {
      width: 38%;
      left: 32%;
      bottom: -17%;
      transform: scaleX(-1);
    }
  }
`;

export const Item = styled.div`
  background-color: ${props =>
    props.BgColor ? props.BgColor : Theme.Color.White};
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.White)};
  padding-top: calc(${Theme.Base.Size.Lg} * 3);
  position: relative;

  .bg-image,
  .gatsby-image-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
  }

  .bg-image {
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${Theme.Color.Eggplant};
      opacity: 0.3;
      z-index: 2;
    }
  }

  .text {
    width: calc(${Theme.Base.Size.Lg} * 11);
    pointer-events: none;
    padding-bottom: 30vw;
    position: relative;
    z-index: 10;
    @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
      padding-bottom: 485px; //which is 30vw at sitewidth
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      width: calc(${Theme.Base.Size.Lg} * 8);
      margin: 0 calc(${Theme.Base.Size.Lg} * 1);
      padding-bottom: 40vw;
      width: auto;
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      padding-bottom: 50vw;
    }
    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      margin: 0;
    }

    .h6 {
      font-weight: 700;
      color: ${props =>
        props.SubTextColor ? props.SubTextColor : Theme.Color.White};
    }

    .h2,
    h2 {
      padding-bottom: calc(${Theme.Base.Size.Lg} / 8);
    }

    a,
    button,
    .btn {
      pointer-events: all;
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
`;

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

    .slick-slide {
      height: auto;
      > div,
      .item {
        height: 100%;
      }
    }
    .slick-track {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: stretch;
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

      @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        top: calc(${Theme.Base.Size.Lg} * 2.5);
      }

      &:before {
        height: calc(${Theme.Base.Size.Lg} / 3);
        width: calc(${Theme.Base.Size.Lg} / 3);
        border: 1.5px solid ${Theme.Color.White};
        content: '';
        position: absolute;
        top: calc(${Theme.Base.Size.Lg} / 3.5);
        left: calc(${Theme.Base.Size.Lg} / 2.5);
        transform: rotate(45deg);
        @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
          height: calc(${Theme.Base.Size.Lg} / 4);
          width: calc(${Theme.Base.Size.Lg} / 4);
        }
      }

      &.slick-prev {
        left: calc(calc(calc(100% - ${Root.Site.Width}) / 2) + 130px);
        @media (max-width: ${Theme.Base.Grid.SiteWidth}) {
          left: 130px;
        }

        @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
          left: 20px;
        }
        @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
          left: 0;
        }

        &:before {
          border-right-color: transparent;
          border-top-color: transparent;
        }
      }

      &.slick-next {
        left: calc(
          calc(calc(calc(100% - ${Root.Site.Width}) / 2) + 240px) +
            calc(${Theme.Base.Size.Lg} * 11)
        );
        @media (max-width: ${Theme.Base.Grid.SiteWidth}) {
          left: calc(calc(${Theme.Base.Size.Lg} * 11) + 240px);
        }
        @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
          left: calc(calc(${Theme.Base.Size.Lg} * 11) + 100px);
        }
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          left: calc(calc(${Theme.Base.Size.Lg} * 8) + 100px);
        }
        @media (max-width: ${Base.Media.Width.Md + 'px'}) {
          left: auto;
          right: calc(${Theme.Base.Size.Lg} / 3);
        }
        @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
          left: calc(${Theme.Base.Size.Lg});
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
    bottom: -9vw;
    left: 0;
    pointer-events: none;
    z-index: 3;
    @media (min-width: ${Theme.Base.Grid.SiteWidth}) {
      bottom: -145.8px;
    }

    svg {
      height: 100%;
      width: 100%;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding-top: calc(${Theme.Base.Size.Lg} / 2);
  @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
    flex-direction: column;
  }

  .hero-btn {
    margin-top: 0;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: none !important;
    }
  }

  /* Ew. Just temporary. */
  section div div div .btn-inner {
    height: calc(var(--ButtonSize) * 1.5);
  }
`;

export const HeroBtn = styled.button`
  margin-top: calc(${Theme.Base.Size.Lg} / 2);
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
  box-shadow: 0px 5px 20px 5px ${hexToRGB(Theme.Color.Deepsea, 0.2)};
  transition: all 0.25s ease;
  height: calc(${Root.Button.Size} * 1.5);
  line-height: 0;
  justify-content: center;
  align-items: center;
  padding: 3px calc(${Theme.Base.Size.Lg} / 2) 0 calc(${
  Theme.Base.Size.Lg
} / 2);
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

export const Decorator = styled(Box)`
  position: relative;

  .decorator__hero {
    position: absolute;
    top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 1);
    z-index: 4;

    &--top {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 1);
      right: -100px;
      width: 140px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        right: -120px;
        width: 200px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: -170px;
        width: 340px;
      }
    }

    &--waterfall {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 3);
      

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: 0;
        width: 600px;
      }
    }

    &--volcano {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 9);
      

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: 35vw;
        width: 400px;
      }
    }

    &--left {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * -2.5);
      left: -95px;
      width: 140px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        left: -120px;
        width: 200px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        left: -70px;
        width: 180px;
      }
    }
  }

  .decorator__footer {
    position: absolute;
    /* top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 1); */
    z-index: 4;

    &--top {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * -2.5);
      left: -95px;
      width: 140px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        left: -120px;
        width: 200px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        left: -25px;
        width: 180px;
      }
    }

    &--bottom {
      left: 50%;
      width: 400px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {

        width: 400px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {

        width: 400px;
      }
    }
  }

  .decorator__better-future {
    position: absolute;
    z-index: 4;

    &--top {
      bottom: calc(${Theme.Root.Size} * 1.6);
      right: -130px;
      width: 200px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        right: -190px;
        width: 300px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: -230px;
        width: 340px;
      }
    }

    &--bottom {
      bottom: calc(${Theme.Root.Size} * -0.8);
      right: -20px;
      width: 200px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        right: -20px;
        width: 300px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: -30px;
        width: 340px;
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
