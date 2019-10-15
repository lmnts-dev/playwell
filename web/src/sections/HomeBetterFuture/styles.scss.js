// <HomeBetterFuture /> Styles:

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

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Container = styled(Section)``;

Container.Inner = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: ${Theme.Color.Dino};

  h2 {
    color: ${Theme.Color.Sunset};
  }
`;

Container.Image = styled(Box)`

  .image {
    height: calc(${Root.Size} * 12);
    margin-right: calc(${Root.Size} * 4);
    flex-shrink: 20;
    position: relative;

    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .ico-swoop {
      display: none;
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        display: block;
        width: 50vw;
        height: 100%;
        z-index: 1;
        svg {
          width: 100%;
        }
      }
    }

    .gatsby-image-wrapper {
      height: 100%;
      z-index: 2;
      position: relative;

      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        width: 50vw;
      }

      picture {

        img {
          /* transform: scaleX(-1); */
        }
      }

      > div {
        height: 100%;
        width: auto !important;
        padding-bottom: 0 !important;
        transform: scaleX(-1);
      }
    }
  }

  .ico-swoop {
    position: absolute;
    height: calc(100% + calc(${Root.Size} / 2));
    left: calc(calc(50vw - calc(${Theme.Base.Grid.SiteWidth} / 2)) * -1.5);
    top: calc(${Root.Size} * -1);
    width: calc(50vw - calc(${Theme.Base.Grid.SiteWidth} / 6));
    transform: rotate(180deg) translateX(0);

    svg {
      height: 100%;
      width: 100%;

      path {
        fill: ${Theme.Color.Galaxy};
      }
    }

    @media (max-width: ${Theme.Base.Grid.SiteWidth}) {
      height: calc(100% + calc(${Root.Size}));
      top: calc(${Root.Size} * -0.5);
      width: auto;
      left: 0;

      svg {
        width: auto;
      }
    }

    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      height: 80%;
      top: 10%;
    }

    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      display: none;
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
