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
  max-width: 70vw;
  position: relative;
  padding-right: ${Root.Grid.Gutter.Right};
  padding-left: ${Root.Grid.Gutter.Left};

  @media (min-width: ${Base.Media.Width.Md + 'px'}) {
    padding-right: calc(${Root.Grid.Gutter.Right} + ${Root.Size} * 0.25);
    padding-left: calc(${Root.Grid.Gutter.Left} + ${Root.Size} * 0.25);
  }

  @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
    padding-right: calc(${Root.Grid.Gutter.Right} + ${Root.Size} * 1);
    padding-left: calc(${Root.Grid.Gutter.Left} + ${Root.Size} * 1);
  }
`;

Hero.Title = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

Hero.Faq = styled(Link)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;

  color: ${Theme.Color.Ocean};
  font-size: 1.2rem;
  font-weight: 600;

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
`;

export const Decorator = styled(Box)`
  position: relative;
  z-index: 99;

  .decorator__left {
    position: absolute;
    top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 1);
    z-index: 4;

    &--top {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 1);
      left: -130px;
      width: 240px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        left: -190px;
        width: 340px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        left: -190px;
        width: 340px;
      }
    }

    &--bottom {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 3.2);
      left: -265px;
      width: 300px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
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
      top: 46vh;
      right: -240px;
      width: 300px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        right: -280px;
        width: 340px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: -280px;
        width: 340px;
      }
    }

    &--bottom {
      top: 60vh;
      right: -100px;
      width: 240px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
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
