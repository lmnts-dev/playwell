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
  height: ${props => (props.Tall ? '50vw' : '30vw')};

  .footer-angle-slice {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 85%;
    z-index: 2;
  }

  .footer-curve-slice {
    width: 100vw;
    height: ${props => (props.Tall ? '50vw' : '30vw')};
    z-index: 1;
    padding-bottom: 5vw;
  }
`;

export const AbsoluteImage = styled.div`
  position: absolute;
  width: ${props => (props.width ? props.width : '25vw')};
  height: ${props => (props.width ? props.width : '25vw')};
  bottom: ${props => (props.bottom ? props.bottom : '0')};
  right: ${props => (props.right ? props.right : '2vw')};
  transform: rotate(${props => (props.rotate ? props.rotate : '0deg')})
    scaleX(${props => (props.flip ? '-1' : '1')});
`;

export const CloudStyle = styled.div`
  width: 30vw;
  position: absolute !important;
  z-index: 3;
  bottom: 0;
  left: ${props => (props.Clouds == '1' ? '-12vw' : '-5vw')};
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    width: calc(${Root.Size} * 6);
    left: calc(${Root.Size} * -1);
  }
  @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
    width: 40vw;
    left: -5vw;
  }
`;
//////////////////////////////////////////////////////////////////////
// End Styles
