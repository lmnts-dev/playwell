// MenuHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Extended Styles

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Keyframes
import { SlideUpKeyframes } from 'components/core/Transition/Keyframes.js';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const OverlayContentContainerStyle = styled.div`
  width: 100vw;
  /* height: calc(100vh - ${Root.Nav.Size}); */
  left: 0;
  top: ${Root.Nav.Size};
  bottom: 0;
  right: 0;
  background-color: ${Theme.Color.White};
  z-index: 999;
  border-radius: ${Root.Radius};
  animation: ${SlideUpKeyframes} .5s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: fixed !important;
  -webkit-transform: none !important;
`;

export default OverlayContentContainerStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
