// Homepage Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Components
import Btn from 'components/library/Btn';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';

// Begin Styles
//////////////////////////////////////////////////////////////////////

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
  top: calc(${Theme.Root.Size} * -2);
  z-index: 9;

  span {
    color: ${Theme.Color.Dino};
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
  bottom: 200px;
  padding-left: ${Root.Grid.Indent.X};
`;

Scroll.Line = styled.div`
  border-left: 1px dashed ${p => p.theme.Color.Primary};
  display: block;
  width: 0;
  height: 160px;
  margin: 0 auto;
`;

//////////////////////////////////////////////////////////////////////
// End Styles
