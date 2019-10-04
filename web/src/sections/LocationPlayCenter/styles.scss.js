// <LocationPlayCenter /> Styles:

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

export const Container = styled(Section)`
  position: relative;
`;

Container.Overflow = styled.div`
  overflow: hidden;
`;

Container.Image = styled.div`
  width: 547px;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: -200px;

  .img {
    width: 587px;
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
