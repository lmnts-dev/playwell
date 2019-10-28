// SpacerCentered Styles:

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
  position: relative;
  justify-content: center;
`;

Container.Line = styled.div`
  display: block;
  margin: 0 auto;
  position: absolute;
  bottom: -50px;
  width: 0;
  height: 120px;
  z-index: 9;

  &:before {
    position: absolute;
    top: calc(${Theme.Base.Size.Lg} / 3);
    bottom: 0;
    width: 1px;
    content: '';
    background-image: linear-gradient(
      ${Theme.Color.Primary} 40%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: right;
    background-size: 1px 10px;
    background-repeat: repeat-y;
  }

  /* &:after {
    content: '\\2023';
    position: absolute;
    bottom: 0;
    left: calc(50% - 9px);
    transform: rotate(90deg) translateY(18%);
    transform-origin: 0% 100%;
    color: ${Theme.Color.Nova};
    font-size: 31px;
  } */
`;

//////////////////////////////////////////////////////////////////////
// End Styles
