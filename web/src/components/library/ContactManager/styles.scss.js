// SplitHero Styles:

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

export const CourseHeroStyle = styled.section`
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

  .search-bar,
  .search-results {
    width: 100;
  }

  .search-bar {
    display: flex;
    width: 100%;
    background: ${Theme.Color.White};
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
      height: ${searchBarHeight};
      line-height: 0;
      position: relative;

      &:before {
        content: 'View contacts below';
        position: absolute;
        right: ${Root.Size};
        top: 56%;
        transform: translateY(-50%);
        font-weight: bold;
        color: ${Theme.Color.Ocean};
        opacity: 0;
        transition: all .5s ease;
      }

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
  }

  .search-results {
    position: absolute;
    top: ${searchBarHeight};
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: ${Theme.Color.White};
    border-radius: 0 0 calc(${searchBarHeight} / 2) calc(${searchBarHeight} / 2);
    z-index: 300;
    box-shadow: 0px 0px 15px 6px ${hexToRGB(Theme.Color.Black, 0.2)};
    max-height: 450px;
    overflow: auto;
    border-top: 1px solid ${hexToRGB(Theme.Color.Ocean, 0.18)};

    ul {
      width: 100%;

      &.results-sub-hidden {
        display: none;
      }

      &.results-sub {
        position: relative;
        li {
          a {
            border-radius: 0px;
            padding: 0 calc(${Root.Size} / 4) 0 calc(${Root.Size} / 2);
          }
        }

        &:before {
          content: '';
          position: absolute;
          left: 15px;
          width: 4px;
          border-radius: 2px;
          top: 0;
          bottom: 0;
          background: ${hexToRGB(Theme.Color.Ocean, 0.18)};
        }

        .results-sub {
          li {
            a {
              padding: 0 calc(${Root.Size} / 4) 0 calc(${Root.Size} * .8);
            }
          }
          &:before {
            left: 30px;
          }
        }
      }

      li {
        text-align: left;
        /* background: white; */
        width: 100%;
        font-weight: bold;
        display: flex;
        flex-direction: column;

        .results-row {
          display: flex;
          align-items: center;
          justify-content: space-between;

          &.results-sub-visible {
            .result-action {
              .result-action-icon {
                transform: rotate(45deg);
              }
            }
          }

          .no-results {
            padding: calc(${Root.Size} *  1.5) calc(${Root.Size} / 2)  ${
  Root.Size
} calc(${Root.Size} / 2);

            width: 100%;
            color: ${hexToRGB(Theme.Color.Ocean, 0.6)};
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .ico {
              margin-bottom: ${Root.Size};
              i {
                font-size: 4rem;
                color: ${Theme.Color.Ocean};
                border-radius: 50%;
                background: ${hexToRGB(Theme.Color.Ocean, 0.18)};
                padding: calc(${Root.Size} / 4);
              }
            }
            .label {
              font-size: 2rem;
            }
          }
        }

        a {
          text-decoration: none;
          color: ${Theme.Color.Ocean};
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex: 1;
          height: calc(${Root.Size} * 0.8);
          padding: 0 calc(${Root.Size} / 4) 0 calc(${Root.Size} / 2);
          border-radius: 0px 999px 999px 0px;
          &:hover {
            text-decoration: none;
            background: ${hexToRGB(Theme.Color.Ocean, 0.18)};
          }

          &.top-level {
            color: ${Theme.Color.Deepsea};
          }

          span {
            position: relative;
            top: 3px;

            &.breadcrumb {
              font-weight: 100;
              font-size: .8rem;
              text-transform: uppercase;
              display: flex;
              padding-right: 20px;
              color: ${hexToRGB(Theme.Color.Black, 0.4)};
            }
          }
        }

        .result-action {
          display: inline-flex;
          cursor: pointer;
          position: relative;
          outline: 0;

          &:before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            border-radius: 50%;
            transition: all 0.25s ease;
            transform: scale(0.4);
            background: ${Theme.Color.Ocean};
            opacity: 0;
          }

          &:hover {
            &:before {
              transform: scale(0.8);
              opacity: 0.18;
              background: ${Theme.Color.Ocean};
            }
          }

          .result-action-icon {
            position: relative;
            width: calc(${Root.Size} * 0.8);
            height: calc(${Root.Size} * 0.8);
            transition: all 0.25s ease;
            transform: rotate(0deg);
            transform-origin: center center;

            &:before,
            &:after {
              content: '';
              position: absolute;
              background: ${Theme.Color.Ocean};
            }

            &:before {
              top: calc(${Root.Size} * 0.3);
              bottom: calc(${Root.Size} * 0.3);
              width: 2px;
              left: 50%;
              transform: translateX(-50%);
            }

            &:after {
              left: calc(${Root.Size} * 0.3);
              right: calc(${Root.Size} * 0.3);
              height: 2px;
              top: 50%;
              transform: translateY(-50%);
            }
          }
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
