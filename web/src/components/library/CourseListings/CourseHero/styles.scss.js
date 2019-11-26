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
  background: ${Theme.Color.Galaxy};

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

  .absolute-image,
  .gatsby-image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &.img {
      &:before {
        content: '';
        background-color: ${hexToRGB(Theme.Color.Dino, 0.6)};
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        z-index: 5;
      }
    }
  }

  h1 {
    .h1,
    .location {
      display: block;
      //  overflow: hidden;
      height: auto;
    }

    .inline {
      display: flex;
      animation: ${SlideUp} 2s ease 0s 1 normal forwards;
      text-align: left !important;
      height: auto;
    }

    .location {
      display: flex;
      font-family: ${Theme.Font.Body};
      font-weight: 400;
      align-items: center;

      &.alt {
        font-family: ${Theme.Font.Header};
      }

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
        @media (max-width: ${Theme.Base.Media.Width.Md}) {
          height: auto;
          width: auto;
        }
      }
    }
  }
`;

// Hero Content

export const CourseHeroContentStyle = styled.div`
  position: relative;
  width: ${props =>
    props.mapWidth
      ? 'calc(calc(100% - ' + props.mapWidth + ') - 40px)'
      : '100%'};
  z-index: ${props => (props.mapZedIndex ? props.mapZedIndex + 1 : 5)};
  overflow: visible;
  z-index: 500;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: ${Theme.Base.Media.Width.Md}) {
    width: 100%;
  }

  .related-queries {
    display: flex;
    margin-top: calc(${Root.Size} / 4);
    flex-wrap: wrap;
    line-height: 1.5;
    width: 100%;

    span {
      font-weight: bold;
    }

    a {
      color: ${Theme.Color.White};
      margin-left: 5px;
      position: relative;

      &:after {
        content: ', ';
      }

      &:first-child {
        margin-left: 0px;
      }

      &:last-child {
        &:after {
          display: none;
        }
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
    width: 100;
  }

  .search-bar {
    display: flex;
    width: 100%;
    max-width: calc(${Theme.Base.Size.Lg} * 10);
    background: ${Theme.Color.White};
    justify-content: space-between;
    border-radius: calc(${Root.Size} / 2);
    transform: scale(1);
    transform-origin: center center;
    /* transition: ${Theme.Base.Transition.String}; */
    z-index: 400;

    &.results-visible {
      border-radius: calc(${Root.Size} / 2) calc(${Root.Size} / 2) 0 0;
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
      width: 100%;
      justify-content: space-between;
      align-items: center;
      padding: 0 calc(${Root.Size} / 3);
      height: ${searchBarHeight};
      line-height: 0;
      position: relative;

      &:before {
        content: 'Select one below';
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
        @media (max-width: ${Theme.Base.Media.Width.Sm}) {
          font-size: .8rem;
        }
      }
    }
  }

  .search-results {
    position: absolute;
    top: ${searchBarHeight};
    max-width: calc(${Theme.Base.Size.Lg} * 10);
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


          a {
            span {
              .nearby {
                color: ${Theme.Color.Slate};
                top: 0px;
                opacity: .6;
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
            .suggest-link {
              background: none;
              margin-top: calc(${Root.Size} / 4);

              &:hover {
                background: none;
              }
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

//////////////////////////////////////////////////////////////////////
// End Styles
