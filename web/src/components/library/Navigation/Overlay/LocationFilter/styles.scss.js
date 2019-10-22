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

export const CourseHeroContentStyle = styled.div`
  position: relative;
  width: ${props =>
    props.mapWidth ? 'calc(100% - ' + props.mapWidth + ')' : '100%'};
  z-index: ${props => (props.mapZedIndex ? props.mapZedIndex + 1 : 5)};
  overflow: visible;
  z-index: 500;

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    width: 100%;
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
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 0 calc(${Root.Size} / 3);
      height: calc(${searchBarHeight} / 1.5);
      line-height: 0;
      position: relative;

      .ico {
        position: relative;
        font-size: calc(${Root.Size} / 2.5);
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
        width: 100%;
      }
    }
  }

  .search-results {
    li {
      padding-top: calc(${Root.Size} / 8);

      a {
        color: ${Theme.Color.Lilac};
        font-weight: 600;
        text-decoration: none;
        transition: ${Theme.Base.Transition.String};

        &:hover,
        &:visited {
          color: ${Theme.Color.Sunset};
        }
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
