// Location Detail Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

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

export const Scroll = styled(Box)`
  align-self: flex-end;
  text-align: left;
  position: relative;
  width: 100%;
  height: 0;
  max-width: ${Theme.Base.Grid.SiteWidth};
  margin: 0 auto;
  padding-right: ${Root.Grid.Gutter.Right};
  padding-left: ${Root.Grid.Gutter.Left};
  /* top: calc(${Theme.Root.Size} * -2); */
  z-index: 9;

  span {
    color: ${Theme.Color.White};
    font-size: 1rem;
    font-weight: bold;
    display: block;
    margin-bottom: calc(${Theme.Root.Size} * 0.1);
  }
`;

Scroll.Positioner = styled.div`
  width: fit-content;
  text-align: center;
  position: relative;
  bottom: 100px;
  padding-left: ${Root.Grid.Indent.X};
`;

Scroll.Line = styled.div`
  border-left: 1px dashed ${p => p.theme.Color.Nova};
  display: block;
  width: 0;
  height: 160px;
  margin: 0 auto;
`;

export const Decorator = styled(Box)`
  overflow: hidden;
  position: relative;

  &.decorator__hero {
    position: absolute;
    top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 1);

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

    &--bottom {
      top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 3.3);
      right: -40px;
      width: 120px;

      @media (min-width: ${Base.Media.Width.Md + 'px'}) {
        right: -70px;
        width: 200px;
      }

      @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
        right: -30px;
        width: 310px;
      }
    }
  }

  &.decorator__footer {
    position: absolute;
    /* top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 1); */

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
`;

//////////////////////////////////////////////////////////////////////
// End Styles
