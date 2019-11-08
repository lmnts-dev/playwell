// <LocationFilter /> Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Keyframe
import { SlideUp } from 'components/core/Transition/Keyframes';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const LocationFilterStyle = styled.section`
  position: relative;
  padding: 0 calc(${Root.Size} / 4) 0 calc(${Root.Size} / 2);
  background: ${Theme.Color.White};
  /* List fade gradient */
  /* background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  ); */

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
    background: ${props => (props.bg ? props.bg : Theme.Color.White)};
  }

  a {
    &:hover {
      text-decoration: none;
    }
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

// Arrow Link

export const ArrowLink = styled.span`
  color: ${Theme.Color.Lilac};
  font-size: 0.9rem;
  line-height: 1.4;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;

  span {
    height: 14px;
  }

  .arrow {
    margin-left: calc(${Root.Size} / 6);

    svg {
      transform: translateX(0);
      fill: ${Theme.Color.Lilac};
      transition: ${Theme.Base.Transition.String};
      height: 14px;
    }

    &:hover {
      svg {
        transform: translateX(20%);
      }
    }
  }

  &:hover {
    .arrow {
      svg {
        transform: translateX(40%);
      }
    }
  }
`;

// Search Bar

let searchBarHeight = Root.Size;

export const SearchBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  background: ${Theme.Color.White};

  .search-bar,
  .search-results {
    width: 100%;
  }

  .search-bar {
    display: flex;
    width: 100%;
    background: ${Theme.Color.Blush};
    justify-content: space-between;
    border-radius: calc(${Root.Size} / 8);
    transform: scale(1);
    transform-origin: center center;
    /* transition: ${Theme.Base.Transition.String}; */
    z-index: 400;

    /* &.results-visible {
      border-radius: calc(${Root.Size} / 8) calc(${Root.Size} / 2) 0 0;
    } */

    &:focus-within {
      .inner {
        &:before {
          opacity: 1;
        }
      }
    }

    .inner {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: calc(${searchBarHeight} / 1.7);
      line-height: 0;
      padding: 0 calc(${Root.Size} / 7);
      position: relative;

      .ico {
        position: relative;
        font-size: calc(${Root.Size} / 3.5);
        color: ${Theme.Color.Primary};
        transform: scaleX(-1);
      }

      input {
        color: ${Theme.Color.Nova};
        height: calc((${searchBarHeight} / 1.7) - 4px);
        font-weight: 600;
        font-size: 1rem;
        /* line-height: 0; */
        display: flex;
        flex: 1;
        border: 0;
        outline: 0;
        background: none;
        position: relative;
        left: 5px;
        top: 2px;
        width: 100%;
        padding-bottom: 0;

        &::placeholder {
          color: ${Theme.Color.Tan};
        }
      }
    }
  }

  .search-results {
    padding-top: calc(${Root.Size} / 7);
    /* max-height: 500px;
    overflow: auto; */

    &::-webkit-scrollbar {
      border-radius: calc(${Root.Radius});
      width: calc(${Root.Size} / 6);
    }
    
    &::-webkit-scrollbar-track {
      border-radius: calc(${Root.Radius});
      background: ${hexToRGB(Theme.Color.Primary, 0.2)};
    }
    
    &::-webkit-scrollbar-thumb {
      border-radius: calc(${Root.Radius});
      background-color: ${Theme.Color.Primary};
      outline: 1px solid slategrey;
    }

    li {
      a {
        color: ${Theme.Color.Lilac};
        display: block;
        font-size: 1rem;
        font-weight: 600;
        text-decoration: none;
        padding: calc(${Root.Size} / 16) 0;
        transition: ${Theme.Base.Transition.String};

        &:hover {
          color: ${Theme.Color.Sunset};
        }
      }
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
