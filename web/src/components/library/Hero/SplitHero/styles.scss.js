// SplitHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Cores
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const GearContainer = styled.div`
  position: absolute;
  top: calc(${props => props.theme.Root.Size} * -1.5);
  left: calc(${props => props.theme.Root.Size} * -1.5);
  z-index: 0;
  @media (max-width: ${Base.Media.Width.Md + 'px'}) {
    left: auto;
    right: calc(${Theme.Base.Size.Lg} * -0.5);
  }
  @media (max-width: ${Base.Media.Width.Sm + 'px'}) {
    top: auto;
    bottom: 0;
    .ico {
      width: calc(${Theme.Base.Size.Lg} * 4);
      height: calc(${Theme.Base.Size.Lg} * 4);
    }
  }
`;

export const SplitHeroStyle = styled.div`
  display: flex;
  flex-direction: ${props => (props.reversed ? 'row-reverse' : 'row')};
  align-items: stretch;
  height: 50vh;
  min-height: calc(${Theme.Base.Size.Lg} * 10);
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
    flex: ${props =>
      !props.reversed && props.wideImage
        ? '4.6'
        : (props.reversed && props.wideImage) ||
          (props.reversed && !props.wideImage)
        ? '1.6'
        : '2.8'};
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
    justify-content: ${props =>
      props.reversed && props.wideImage
        ? 'center'
        : props.reversed && !props.wideImage
        ? 'flex-start'
        : 'flex-start'};
    margin-top: ${props => (props.reversed && !props.wideImage ? '0' : '10%')};
    ${props =>
      props.reversed && !props.wideImage ? 'margin-bottom: 10%;' : null}
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
      ${props => props.reversed && props.wideImage && 'padding: 0 20px;'};
      ${props =>
        props.subNavColor ? 'color: ' + props.subNavColor + ';' : ''};
      font-size: 1.25rem;
      padding-right: calc(${Theme.Base.Size.Lg} / 2);

      &:last-of-type {
        padding-right: 0;
      }

      &.link-active {
        opacity: 1;
        /* color: ${Theme.Color.Nova}; */
      }

      &:hover {
        opacity: 1;
      }
      @media (max-width: ${Base.Media.Width.Lg + 'px'}) {
        font-size: 1.7vw;
        padding-right: 2vw;
      }
      @media (max-width: ${Base.Media.Width.Md + 'px'}) {
        font-size: 1.1rem;
        padding-right: calc(${Theme.Base.Size.Lg} / 2);
      }
    }
  }
`;

export const VideoModal = styled.div`
  height: 100%;
  width: 120%;
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;

  &:hover {
    ~ .play-button {
      transform: scale(1.1) translateX(-50%);
    }
  }
  
  .open-button {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
  }
  @keyframes modal-video {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes modal-video-inner {
    from {
      transform: translate(0, 100px);
    }

    to {
      transform: translate(0, 0);
    }
  }

  .modal-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${hexToRGB(Theme.Color.Dino, 0.5)};;
    z-index: 999;
    pointer-events: all;
    cursor: pointer;
    opacity: 1;
    animation-timing-function: ease-out;
    animation-duration: .3s;
    animation-name: modal-video;
    -webkit-transition: opacity .3s ease-out;
    -moz-transition: opacity .3s ease-out;
    -ms-transition: opacity .3s ease-out;
    -o-transition: opacity .3s ease-out;
    transition: opacity .3s ease-out;
  }

  .modal-video-effect-exit {
    opacity: 0;

    & .modal-video-movie-wrap {
      -webkit-transform: translate(0, 100px);
      -moz-transform: translate(0, 100px);
      -ms-transform: translate(0, 100px);
      -o-transform: translate(0, 100px);
      transform: translate(0, 100px);
    }
  }

  .modal-video-body {
    max-width: 940px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: table;
  }

  .modal-video-inner {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }

  .modal-video-movie-wrap {
    width: 100%;
    height: 0;
    position: relative;
    padding-bottom: 56.25%;
    background-color: #333;
    animation-timing-function: ease-out;
    animation-duration: .3s;
    animation-name: modal-video-inner;
    -webkit-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    transform: translate(0, 0);
    -webkit-transition: -webkit-transform .3s ease-out;
    -moz-transition: -moz-transform .3s ease-out;
    -ms-transition: -ms-transform .3s ease-out;
    -o-transition: -o-transform .3s ease-out;
    transition: transform .3s ease-out;

    & iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .modal-video-close-btn {
    position: absolute;
    z-index: 2;
    top: -35px;
    right: -35px;
    display: inline-block;
    width: 35px;
    height: 35px;
    overflow: hidden;
    border: none;
    background: transparent;
    display: none;

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      top: 50%;
      left: 0;
      margin-top: -1px;
      background: #fff;
      border-radius: 5px;
      margin-top: -6px;
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
