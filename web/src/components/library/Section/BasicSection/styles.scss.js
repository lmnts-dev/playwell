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
  position: relative;
  background: ${props => (props.BgColor ? props.BgColor : Theme.Color.Primary)};
  color: ${props => (props.TextColor ? props.TextColor : Theme.Color.White)};
  padding: calc(${Theme.Base.Size.Lg} * 1.25) 0
    calc(${Theme.Base.Size.Lg} * 1.25) 0;
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    padding: calc(${Theme.Base.Size.Lg} * 0.75) 0
      calc(${Theme.Base.Size.Lg} * 0.75) 0;
  }
  @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
    padding: calc(${Theme.Base.Size.Lg} / 1) 0 calc(${Theme.Base.Size.Lg} / 1) 0;
  }

  &.split-hero {
    padding: calc(${Theme.Base.Size.Lg} * 1.25) 0
      calc(${Theme.Base.Size.Lg} * 0.9) 0;
  }

  ${props =>
    props.BgLinear
      ? `
    .linear-background {
      position: absolute;
      top: 1px;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient( to bottom, ` +
        props.BgLinear +
        ' 75%, ' +
        props.BgColor +
        ` 75% );
    }
  `
      : null};

  ${props =>
    props.BorderTop || props.BorderMiddle
      ? `
    background-image: linear-gradient(to right, ` +
        props.BorderTop +
        ` 50%, rgba(255,255,255,0) 0%);
    background-position: top;
    background-size: 10px 1px;
    background-repeat: repeat-x;
  `
      : null};
  ${props => (props.BorderMiddle ? 'background-position: left center;' : null)};
  ${props => (props.noPaddingBottom ? 'padding-bottom: 0 !important;' : null)};
  ${props => (props.noPaddingTop ? 'padding-top: 0 !important;' : null)};

  ${props =>
    props.BorderBottomVertical
      ? `
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
      : null};

  ${props =>
    props.BorderTopVertical
      ? `
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
      : null};

  &.hide {
    display: none;
  }
`;

export const BasicInnerStyle = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: ${Root.Site.Width};
  padding: 0 220px;

  @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
    padding: 0 95px;
  }

  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    padding: 0 45px;
  }

  @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
    padding: 0 25px;
  }

  ${props =>
    props.wideWidth
      ? `
    padding: 0 60px;
    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      padding: 0 45px;
    }
  
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      padding: 0 30px;
    }
  
    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      padding: 0 15px;
    }
  `
      : null};
  ${props => (props.noPaddingLeft ? 'padding-left: 0 !important;' : null)};
  ${props => (props.noPaddingRight ? 'padding-right: 0 !important;' : null)};
`;

export default BasicSectionStyle;

//////////////////////////////////////////////////////////////////////
// End Styles
