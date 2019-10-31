// <LocationHero /> Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';
import { Link } from 'gatsby';

// Components
import { Box, Flex, Text } from 'components/library/Elements';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Hero = styled(Box)`
  margin: 0 auto;
  width: 100%;
  position: relative;

  @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
    max-width: 70vw;
    padding-right: calc(${Root.Grid.Gutter.Right} + ${Root.Size} * 0.25);
    padding-left: calc(${Root.Grid.Gutter.Left} + ${Root.Size} * 0.25);
  }

  @media (min-width: ${Base.Media.Width.Md + 'px'}) {
    padding-right: calc(${Root.Grid.Gutter.Right} + ${Root.Size} * 1);
    padding-left: calc(${Root.Grid.Gutter.Left} + ${Root.Size} * 1);
  }

  .title {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  .faq {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    text-align: center;

    color: ${Theme.Color.Ocean};
    font-size: 1.2rem;
    font-weight: 600;

    .faq {
      &:before {
        content: 'FAQ';

        @media (min-width: ${Base.Media.Width.Md + 'px'}) {
          content: 'Frequently Asked Questions';
        }
      }
    }

    .arrow {
      margin-left: calc(${Root.Size} / 6);

      svg {
        transform: translateX(0);
        fill: ${Theme.Color.White};
        transition: ${Theme.Base.Transition.String};
        height: 14px;
      }

      &:hover {
        svg {
          transform: translateX(20%);
        }
      }
    }

    &:hover {
      .arrow {
        svg {
          transform: translateX(40%);
        }
      }
    }
  }
`;

export const Decorator = styled(Box)`
  position: relative;
  z-index: 99;

  .decorator__left {
    position: absolute;
    top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} / 1);
    z-index: 4;

    &--top {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} / 8);
      left: -120px;
      width: 180px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 1);
        left: -190px;
        width: 340px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        left: -190px;
        width: 340px;
      }
    }

    &--bottom {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 1);
      left: -180px;
      width: 200px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 2.6);
        left: -305px;
        width: 340px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        left: -305px;
        width: 340px;
      }
    }
  }

  .decorator__right {
    position: absolute;
    top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 1);

    &--top {
      top: 54vh;
      right: -150px;
      width: 180px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        top: 46vh;
        right: -280px;
        width: 340px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: -280px;
        width: 340px;
      }
    }

    &--bottom {
      top: 65vh;
      right: -140px;
      width: 200px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        top: 60vh;
        right: -160px;
        width: 340px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: -160px;
        width: 340px;
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
