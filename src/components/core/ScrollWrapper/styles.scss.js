// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const ScrollArea = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  overflow-x: hidden;
  /* overflow-y: scroll;
  -webkit-overflow-scrolling: touch; */
  position: relative;
  height: auto;
  transition: all 0s linear !important;
`;

export default ScrollArea;
