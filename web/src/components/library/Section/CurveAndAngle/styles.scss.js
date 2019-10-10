// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Helpers
import {
  SectionInnerStyle,
  SectionContentStyle,
} from './../../Section/styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const CurveAndAngleStyle = styled.div`
  position: relative;
  width: 100vw;
  height: 30vw;

  .footer-angle-slice {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 85%;
    z-index: 2;
  }

  .footer-curve-slice {
    width: 100%;
    height: calc(100% - ${Root.Size});
    z-index: 1;
  }

  .absolute-image {
    position: absolute;
    width: 25vw;
    height: 25vw;
    bottom: 0;
    right: 2vw;
  }
  
  .clouds {
    width: 30vw;
    position: absolute !important;
    z-index: 3;
    bottom: 0;
    left: -5vw;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      width: calc(${Root.Size} * 6);
      left: calc(${Root.Size} * -1);
    }
  }
  
`;

//////////////////////////////////////////////////////////////////////
// End Styles
