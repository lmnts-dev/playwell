// SplitHero Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Keyframe
import {
  FadeIn,
  FadeOut,
  SlideUp,
  SlideToRight,
  SlideToLeft,
} from 'components/core/Transition/Keyframes';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const ProgramsHeroStyle = styled.section`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
    background: ${props => (props.bg ? props.bg : Theme.Color.Black)};
  }

  h1 {
    .h1,
    .location {
      display: block;
      overflow: hidden;
    }

    .inline {
      display: flex;
      animation: ${SlideUp} 2s ease 0s 1 normal forwards;
      text-align: left !important;
    }

    .location {
      display: flex;
      font-family: ${Theme.Font.Body};
      font-weight: 400;
      align-items: center;

      .inline {
        display: flex;
        align-items: center;
      }

      .ico {
        position: relative;
        top: -5px;
        left: 5px;
        font-size: calc(${Root.Size} / 1.5);
        margin-right: calc(${Root.Size} / 4);
        color: ${Theme.Color.Nova};
      }
    }
  }
`;

// Hero Content

export const ProgramsHeroContentStyle = styled.div`
  position: relative;
  width: ${props =>
    props.mapWidth ? 'calc(100% - ' + props.mapWidth + ')' : '100%'};
  z-index: ${props => (props.mapZedIndex ? props.mapZedIndex + 1 : 5)};
`;

// Search Bar

let searchBarHeight = Root.Size;

export const SearchBarStyle = styled.div`
  display: flex;
  background: ${Theme.Color.White};
  justify-content: space-between;
  border-radius: 999px;
  transform: scale(1);
  transform-origin: center center;
  transition: ${Theme.Base.Transition.String};

  &:hover {
    transform: scale(1.01);
  }

  .inner {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 calc(${Root.Size} / 3);
    height: ${searchBarHeight};
    line-height: 0;

    .ico {
      position: relative;
      font-size: calc(${Root.Size} / 2);
      color: ${Theme.Color.Nova};
    }

    input {
      height: ${searchBarHeight};
      font-weight: bold;
      font-size: 1.2rem;
      line-height: 0;
      display: flex;
      flex: 1;
      border: 0;
      outline: 0;
      background: none;
      position: relative;
      left: 5px;
      top: 3px;
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
