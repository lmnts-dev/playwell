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

export const OverflowHidden = styled.div`
  width: 100vw;
  overflow: hidden;

  .text {
    h2 {
      color: white !important;
    }
  }
`

//////////////////////////////////////////////////////////////////////
// End Styles
