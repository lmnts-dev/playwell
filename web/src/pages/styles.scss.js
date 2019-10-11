// HomePage Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Components
import Btn from 'components/library/Btn';
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Main = styled.main`
  overflow: hidden;
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
