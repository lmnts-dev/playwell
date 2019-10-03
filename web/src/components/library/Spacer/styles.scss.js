// Spacer Styles:

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

export const Container = styled.div`
  align-self: flex-end;
  text-align: left;
  position: relative;
  width: 100%;
  height: 0;
  top: calc(${Theme.Root.Size} * -2);

  @media (min-width: ${Base.Media.Width.Md + 'px'}) {
    padding-left: ${props => (props.indent ? `calc(${Root.Size} * 1)` : '0')};
  }

  @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
    padding-left: ${props => (props.indent ? `calc(${Root.Size} * 2.5)` : '0')};
  }

  span {
    color: ${Theme.Color.Dino};
    font-size: 1rem;
    font-weight: 700 !important;
    display: block;
    margin-bottom: calc(${Theme.Root.Size} * 0.1);
  }
`;

Container.Inner = styled(Box)`
  width: 100%;
  max-width: ${Theme.Base.Grid.SiteWidth};
  /* height: 0; */
  margin: 0 auto;
  overflow-x: visible;
  position: relative;
  padding-right: ${Root.Grid.Gutter.Right};
  padding-left: ${Root.Grid.Gutter.Left};

  @media (min-width: ${Base.Media.Width.Md + 'px'}) {
    padding-right: calc(${Root.Grid.Gutter.Right} + ${Root.Size} * 0.25);
    padding-left: calc(${Root.Grid.Gutter.Right} + ${Root.Size} * 0.25);
  }

  @media (min-width: ${Base.Media.Width.Lg + 'px'}) {
    padding-right: calc(${Root.Grid.Gutter.Right} + ${Root.Size} * 1);
    padding-left: calc(${Root.Grid.Gutter.Right} + ${Root.Size} * 1);
  }
`;

Container.Positioner = styled.div`
  width: fit-content;
  text-align: center;
  position: relative;
  bottom: 160px;
  z-index: 9;
`;

Container.Line = styled.div`
  border-left: 1px dashed ${p => p.theme.Color.Primary};
  display: block;
  width: 0;
  height: 160px;
  margin: 0 auto;
`;

//////////////////////////////////////////////////////////////////////
// End Styles
