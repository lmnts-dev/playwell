// MasonrySecction Styles:

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


export const BasicSectionStyle = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
  position: relative;
  background: ${props =>
    props.BgColor ? props.BgColor : Theme.Color.Primary};
  color: ${props =>
    props.TextColor ? props.TextColor : Theme.Color.White};
  padding: calc(${Root.Grid.Gutter.Top} * 4) 0
    calc(${Root.Grid.Gutter.Bottom} * 4) 0;
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    padding: calc(${Root.Grid.Gutter.Top}) 0
      calc(${Root.Grid.Gutter.Bottom}) 0;
  }
  ${props => (props.BorderTop || props.BorderMiddle ) ? `
    background-image: linear-gradient(to right, ` + Theme.Color.Clay + ` 50%, rgba(255,255,255,0) 0%);
    background-position: bottom;
    background-size: 10px 1px;
    background-repeat: repeat-x;
  `
  : null};
  ${props => props.BorderMiddle ? 'background-position: left center;' : null};
  ${props => props.noPaddingBottom ? 'padding-bottom: 0 !important;' : null};
  ${props => (props.noPaddingTop ? 'padding-top: 0 !important;' : null)};

  ${props => (props.BorderBottomVertical ? `
    &:after {
      content: '';
      position: absolute;
      width: 1px;
      height: calc(${Root.Size} / 1.5);
      bottom: 0;
      left: 50%;
      background-image: linear-gradient(
        ${Theme.Color.Nova} 40%,
        rgba(255, 255, 255, 0) 0%
      );
      background-position: right;
      background-size: 1px 10px;
      background-repeat: repeat-y;
      z-index: 10;
    }`
    : null)};

  ${props => (props.BorderTopVertical ? `
    &:before {
      content: '';
      position: absolute;
      width: 1px;
      height: calc(${Root.Size} / 1.5);
      top: 0;
      left: 50%;
      background-image: linear-gradient(
        ${Theme.Color.Nova} 40%,
        rgba(255, 255, 255, 0) 0%
      );
      background-position: right;
      background-size: 1px 10px;
      background-repeat: repeat-y;
      z-index: 10;
    }`
    : null)};
`;

export const BasicInnerStyle = styled.div`
  margin: 0 auto;
  max-width: ${Root.Site.Width};
  padding: 0 calc(${Root.Grid.Gutter.Right} + ${Root.Size} * 2) 0 calc(${
         Root.Grid.Gutter.Left
       } + ${Root.Size} * 2);
  };
  @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
    padding: 0 calc(${Root.Grid.Gutter.Right} + ${Root.Size} * 1) 0 calc(${
         Root.Grid.Gutter.Left
       } + ${Root.Size} * 1);
    };
  }
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    padding: 0 calc(${Root.Grid.Gutter.Right} + ${Root.Size} * .5) 0 calc(${
         Root.Grid.Gutter.Left
       } + ${Root.Size} * .25);
    };
  }
  @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
    padding: 0 calc(${Root.Grid.Gutter.Right});
    };
  }

  ${props =>
    props.wideWidth
      ? `
     padding: 0 calc(${Root.Grid.Gutter.Right}) !important;
  };
  `
      : null};
  ${props => (props.noPaddingLeft ? 'padding-left: 0 !important;' : null)};
  ${props => (props.noPaddingRight ? 'padding-right: 0 !important;' : null)};
`;

export default BasicSectionStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
