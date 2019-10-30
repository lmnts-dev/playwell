// SplitHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const GearContainer = styled.div`
  position: absolute;
  top: calc(${props => props.theme.Root.Size} * -1.5);
  left: calc(${props => props.theme.Root.Size} * -1.5);
  z-index: 0;
`;

export const SplitHeroStyle = styled.div`
  display: flex;
  flex-direction: ${props => (props.reversed ? 'row-reverse' : 'row')};
  align-items: stretch;
  height: 50vh;
  min-height: calc(${Theme.Base.Size.Lg} * 8);
  max-height: calc(${Theme.Base.Size.Lg} * 18);
  padding-top: calc(${Theme.Base.Size.Lg} * 1.5);
  position: relative;
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    display: block;
    padding-right: calc(${Theme.Base.Size.Lg} * .75);
    height: auto;
    min-height: 0;
    max-height: none;
  }
  @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
    padding-right: calc(${Theme.Base.Size.Lg} / 2);
  }

  .text {
    flex: ${props => (props.reversed ? '1' : '3')};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: calc(${Theme.Base.Size.Lg} * ${props =>
  props.reversed ? '0' : '1.5'});
    position: relative;
    z-index: 2;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      margin-${props => (props.reversed ? 'left' : 'right')}: calc(${
  Theme.Base.Size.Lg
} * .75);
    }
    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      margin-right: 0;
    }
  }
  .arrow, .flex-spacer {
    flex-grow: 20;
  }

  .txt-clr-dino {
    color: ${Theme.Color.Dino};
  }

  .children {
    .btn-inner {
      margin-bottom: calc(${Theme.Base.Size.Lg} / 3);
    }
  }

  .arrow {
    position: relative;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      height: calc(${Theme.Base.Size.Lg} * 1.5);
      margin-bottom: calc(${Theme.Base.Size.Lg} / 3);
    }

    &:after {
      content: "\\2023";
      position: absolute;
      bottom: 0;
      left: 0;
      transform: rotate(90deg) translateY(18%);
      transform-origin: 0% 100%;
      color: ${props =>
        props.arrowColor ? props.arrowColor : Theme.Color.Nova};
      font-size: 30px;
    }

    &:before {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 10px;
      content: '';
      background-image: linear-gradient(
        ${props =>
          props.arrowColor ? props.arrowColor : Theme.Color.Nova} 40%,
        rgba(255, 255, 255, 0) 0%
      );
      background-position: right;
      background-size: 1px 10px;
      background-repeat: repeat-y;
    }
  }

  .imagery {
    flex: ${props => (!props.reversed && props.wideImage ? '5' : '3')};
    margin-right: calc(${Theme.Base.Size.Lg} * ${props =>
  props.reversed ? '1.5' : '1'});
    position: relative;
    @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
      margin-right: calc(${Theme.Base.Size.Lg} * .75);
    }
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      height: calc(${Theme.Base.Size.Lg} * 6);
    }
    @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
      margin-right: 0;
    }

    .gatsby-image-wrapper {
      z-index: 1;
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: calc(${Theme.Base.Size.Lg} ${props =>
  props.reversed ? '* 0' : '/ 10'});
      border-top-left-radius: calc(${Theme.Base.Size.Lg} ${props =>
  props.reversed || props.wideImage ? '* 0' : '* 0.75'});
      border-top-right-radius: calc(${Theme.Base.Size.Lg} ${props =>
  props.reversed || props.wideImage ? '* 0.75' : '* 0'});
    }
  }

  .sub-nav, ~ .sub-nav {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: ${props => (props.reversed ? 'center' : 'space-between')};
    margin-top: 10%;
    @media (max-width: ${Base.Media.Width.Md + 'px'}) {
      margin: calc(${Theme.Base.Size.Lg} / 4) 0;
    }

    &.padding-left {
      padding-left: 220px;
      margin-top: calc(${Theme.Base.Size.Lg});
      @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
        padding-left: 95px;
      }

      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        padding-left: 45px;
      }

      @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        padding-left: 25px;
      }
    }

    a {
      font-weight: 700;
      text-transform: capitalize;
      opacity: .5;
      transition-duration: .5s;
      ${props => props.reversed && 'padding: 0 20px'};
      ${props => (props.subNavColor ? 'color: ' + props.subNavColor : '')};

      &.link-active {
        opacity: 1;
        color: ${Theme.Color.Nova};
      }

      &:hover {
        opacity: 1;
      }
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        font-size: 1.5rem;
      }
      @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
        font-size: 1.2rem;
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
