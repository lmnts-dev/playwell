// HeroContainer Styles:
// Outer container styles for Hero variations

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Components
import { Box, Flex } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';

// Begin Styles
//////////////////////////////////////////////////////////////////////

let heroHeight = '130vh';

export const Container = styled(Flex)`
  height: ${props => (props.withMask ? heroHeight : '70vh')};
  text-align: ${props => props.textAlign};
  position: relative;
`;

Container.Inner = styled.div`
  width: 100%;
  max-width: ${props => (props.fullWidth ? '100%' : Theme.Base.Grid.SiteWidth)};
  margin: 0 auto;
  position: relative;
  padding-top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 4);
  padding-bottom: calc(${props => props.theme.Root.Size} * 1);

  @media (min-width: ${Base.Media.Width.Md + 'px'}) {
    padding-top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 2);
  }
`;

export const Mask = styled.div`

  .footer-curve-slice,
  .footer-angle-slice {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(${heroHeight} / 2);
    /* min-height: calc(${heroHeight} / 1.6); */
    z-index: -1;
  }

  .footer-curve-slice {
    opacity: 1;
    bottom: 106px;
  }
`;

export const Scroll = styled.div`
  align-self: flex-end;
  text-align: left;
  position: relative;
  width: 100%;
  max-width: ${Theme.Base.Grid.SiteWidth};
  margin: 0 auto;
  padding-right: ${Root.Grid.Gutter.Right};
  padding-left: ${Root.Grid.Gutter.Left};
  top: -3rem;
  z-index: 9;

  span {
    color: ${Theme.Color.Dino};
    text-align: left;
    font-size: 1rem;
    width: 100%;
    display: inline-block;
  }
`;

Scroll.Positioner = styled.div`
  display: block;
  flex-wrap: wrap;
  position: relative;
  text-align: center;
  height: 100px;
`;

Scroll.Line = styled.span`
  display: block;
  width: 0;
  height: 100px;
  border-left: 1px dashed ${p => p.theme.Color.Primary};
`;

//////////////////////////////////////////////////////////////////////
// End Styles
