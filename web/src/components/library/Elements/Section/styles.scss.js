// Section Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Components
import { Box, Flex } from 'components/library/Elements';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Container = styled(Flex)`
  text-align: ${p => p.textAlign};
  background-image: url(${p => p.bgImage});
  background-size: cover;
  background-position: center center;
  position: relative;
  width: 100%;

  @media (min-width: ${Base.Media.Width.Md + 'px'}) {
    padding-left: ${p => (p.indent ? `calc(${Root.Size} * 1)` : '0')};
  }

  @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
    padding-left: ${p => (p.indent ? `calc(${Root.Size} * 2.5)` : '0')};
  }
`;

Container.Overlay = styled(Box)`
  opacity: ${p => p.alpha};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

Container.Inner = styled(Box)`
  width: 100%;
  max-width: ${p => (p.fullWidth ? '100%' : Theme.Base.Grid.SiteWidth)};
  margin: 0 auto;
  /* overflow-x: visible; */
  position: relative;
  padding-right: ${p => (p.fullWidth ? '0' : Root.Grid.Gutter.Right)};
  padding-left: ${p => (p.fullWidth ? '0' : Root.Grid.Gutter.Left)};

  @media (min-width: ${Base.Media.Width.Md + 'px'}) {
    padding-right: ${p =>
      p.fullWidth
        ? '0'
        : `calc(${Root.Grid.Gutter.Right} + ${Root.Size} * 0.25)`};
    padding-left: ${p =>
      p.fullWidth
        ? '0'
        : `calc(${Root.Grid.Gutter.Left} + ${Root.Size} * 0.25)`};
  }

  @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
    padding-right: ${p =>
      p.fullWidth ? '0' : `calc(${Root.Grid.Gutter.Right} + ${Root.Size} * 1)`};
    padding-left: ${p =>
      p.fullWidth ? '0' : `calc(${Root.Grid.Gutter.Left} + ${Root.Size} * 1)`};
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
