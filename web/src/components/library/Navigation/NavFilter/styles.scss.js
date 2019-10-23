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
  /* List fade gradient */
  /* background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  ); */

  &:before {
    content: '';
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
    /* background: ${props => (props.bg ? props.bg : Theme.Color.Black)}; */
    background: transparent;
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

  .search-bar,
  .search-results {
    width: 100%;
  }

  .search-bar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-radius: calc(${Root.Size} / 8);
    transform: scale(1);
    transform-origin: center center;
    /* transition: ${Theme.Base.Transition.String}; */
    z-index: 400;

    /* &.results-visible {
      border-radius: calc(${Root.Size} / 8) calc(${Root.Size} / 2) 0 0;
    } */

    &.btn {
      &:hover {
        background: ${Theme.Color.White};
      }
    }

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
      border: 1px solid ${hexToRGB(Theme.Color.Lilac, 0.11)};
      border-radius: calc(${Root.Radius} / 2);

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
`;

SearchBarStyle.Item = styled.button`
  position: relative;
  color: ${Theme.Color.White};
  background: transparent;
  border: 0;
  border: 1px solid ${Theme.Color.White};
  outline: 0;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  display: flex;
  flex: 1;
  cursor: pointer;
  border-radius: 999px;

  .ico-carat {
    position: relative;
    top: -2px;
    right: -4px;
    transform: rotate(90deg) scale(0.5);
    transform-origin: center center;

    polygon,
    svg,
    g {
      fill: ${Theme.Color.White};
    }
  }

  .ico-pin {
    margin-right: calc(${Theme.Base.Size.Lg} / 8);
    position: relative;
    top: -3px;
  }

  &:hover {
    color: ${Theme.Color.Warmsky};
    background-color: ${Theme.Color.White};

    .ico-pin {
      svg,
      path,
      polygon,
      g {
        fill: ${Theme.Color.Ocean};
      }
    }

    .list {
      transform: translate(0%, 0%);
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    }
  }

  &:last-child {
    margin-right: 0;
  }

  .filter-inner {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    top: 4px;
    width: 100%;
    text-align: center;
    padding: 0;

    span:nth-of-type(2) {
      flex: 50;
    }
  }
`;

SearchBarStyle.FilterList = styled.div`
  position: absolute;
  top: 99%;
  /* left: 0; */
  right: 0;
  width: 260px;
  transform: translate(0, 20%);
  background: ${Theme.Color.White};
  box-shadow: 0 12px 44px 0 ${hexToRGB(Theme.Color.Galaxy, 0.11)};
  border-radius: calc(${Root.Radius} / 2);
  z-index: 20;
  overflow: hidden;
  transition: ${Theme.Base.Transition.String};
  opacity: 0;
  visiblity: hidden;
  pointer-events: none;

  /* .search-results {
    padding-top: calc(${Root.Size} / 7);
    background: ${Theme.Color.White};
    height: calc(${Root.Size} * 3);
    overflow: auto;

    position: relative;

    display: flex;
    flex-direction: column;
    width: 100%;

    li {
      padding-top: calc(${Root.Size} / 7);

      a {
        color: ${Theme.Color.Lilac};
        font-size: 1rem;
        font-weight: 600;
        text-decoration: none;
        transition: ${Theme.Base.Transition.String};

        &:hover {
          color: ${Theme.Color.Sunset};
        }

        &:visited {
          color: ${Theme.Color.Sunlight};
        }
      }
    }
  } */

  .search-container {
    padding: calc(${Root.Size} / 4) calc(${Root.Size} / 3);
    box-sizing: border-box;

    .inner {
      box-shadow: 0 10px 20px ${Theme.Color.White};
    }
  }

  ul {
    background: ${Theme.Color.White};
    width: 100%;
    height: 210px;
    overflow: auto;
    margin-top: calc(${Root.Size} / 4);
    box-shadow: inset -12px -10px 15px ${Theme.Color.White};

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
      display: flex;
      align-items: center;
      text-align: left;
      cursor: pointer;
      padding: calc(${Root.Size} / 9) 0;
      color: ${Theme.Color.Warmsky};

      &:hover {
        background-color: ${hexToRGB(Theme.Color.Ocean, 0.06)};
        color: ${Theme.Color.Ocean};
      }

      a {
        color: ${Theme.Color.Lilac};
        font-size: 1rem;
        font-weight: 600;
        text-decoration: none;
        transition: ${Theme.Base.Transition.String};

        &:hover {
          color: ${Theme.Color.Sunset};
        }

        /* &:visited {
          color: ${Theme.Color.Sunlight};
        } */
      }
    }
  }
`;

export const Article = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background: ${Theme.Color.White};
  padding: calc(${Root.Size} / 2);
  width: 100%;
  border-radius: calc(${Root.Size} / 8);

  @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
    padding: calc(${Root.Size} / 3);
  }
`;

Article.Info = styled.div`
  display: flex;
  padding-left: calc(${Root.Size} / 2);
  width: 85%;
  position: relative;
  left: -40px;

  @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
    padding-left: calc(${Root.Size} / 3);
    width: 75%;
  }
`;

Article.Figure = styled.figure`
  margin: 0;
  width: 15%;
  max-width: 140px;
  height: 15%;
  max-height: 140px;
  position: relative;
  left: -60px;

  @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
    width: 25%;
    height: 25%;
  }

  .gatsby-image-wrapper {
    border-radius: calc(${Root.Radius} * 10);
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
`;

Article.Info.Details = styled.div`
  color: ${Theme.Color.Nova};
  display: block;
  font-weight: 500;
  margin-bottom: calc(${Root.Size} / 4);
  width: 100%;
  text-transform: capitalize;

  span {
    color: ${Theme.Color.Dino};
    margin-left: calc(${Root.Size} / 2);
  }
`;

Article.Info.Name = styled.div`
  color: ${Theme.Color.Deepsea};
  display: block;
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: calc(${Root.Size} / 1);
  width: 100%;

  @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
    margin-top: 0;
  }
`;

Article.Info.Contact = styled.div`
  align-self: flex-end;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  color: ${Theme.Color.Nova};
  font-weight: 500;
  margin-top: calc(${Root.Size} / 1);
  width: 100%;

  @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
    flex-direction: row;
  }

  span {
    margin-bottom: calc(${Root.Size} / 3);
    display: block;

    &:last-child {
      margin-bottom: 0;
    }

    @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
      margin-bottom: 0;
    }

    a {
      color: ${Theme.Color.Nova};
    }
  }
`;

//////////////////////////////////////////////////////////////////////
// End Styles
