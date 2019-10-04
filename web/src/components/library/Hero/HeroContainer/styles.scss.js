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
let minHeroHeight = '500px';

export const Container = styled(Flex)`
  min-height: ${props => (props.withMask == true ? heroHeight : '70vh')};
  text-align: ${props => props.textAlign};
  position: relative;
`;

Container.Inner = styled.div`
  width: 100%;
  max-width: ${props => (props.fullWidth ? '100%' : Theme.Base.Grid.SiteWidth)};
  margin: 0 auto;
  position: relative;
  padding-top: calc(${Theme.Root.Nav.Size} + ${Theme.Root.Size} * 4);
  padding-bottom: calc(${Theme.Root.Size} * 1);

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
    min-height: ${minHeroHeight};
    z-index: -1;
  }

  .footer-curve-slice {
    opacity: 1;
    bottom: 106px;
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
