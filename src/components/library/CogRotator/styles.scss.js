// CogRotator Styles:
// Container and animations for cog rotation

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Container = styled.div`
  position: absolute;
  top: calc(${Theme.Root.Size} * -1.2);
  left: calc(${Theme.Root.Size} * -1.2);
  z-index: 0;
`;

export const Rotator = styled.div`
  animation-name: spin;
  animation-duration: 40000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @-ms-keyframes spin {
    from {
      -ms-transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
    }
  }
  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
