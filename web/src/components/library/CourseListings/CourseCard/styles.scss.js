// Course Card Component Styles:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';

// Keyframes
import { FadeIn, FadeOut } from 'components/core/Transition/Keyframes';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

let cardPaddingY = 'calc(' + Root.Size + '/ 2)';

export const CourseCardStyle = styled.div`
  display: flex;

  a {
    flex: 1;
    position: relative;
    border-top: 1px solid ${Theme.Color.Blush};
    color: ${Theme.Color.Primary};
    text-decoration: none;
    padding: ${cardPaddingY} 0 ${cardPaddingY} calc(${Root.Size} / 1);
    /* border-radius: 5px; */

    &:before {
      content: '';
      position: absolute;
      left: calc((${Root.Size} / 6) * -1);
      right: calc((${Root.Size} / 6) * -1);
      top: calc(${Root.Size} / 6);
      bottom: calc(${Root.Size} / 6);
      border-radius: 4px;
      background: ${hexToRGB(Theme.Color.Ocean, 0.07)};
      transform: scale(0.95);
      transition: all 0.25s ease;
      border: 1px solid ${hexToRGB(Theme.Color.Ocean, 0.08)};
      opacity: 0;
    }

    &:hover {
      &:before {
        opacity: 1;
        transform: scale(1);
      }

      .ico {
        opacity: 1;
        transform: translateX(0);
      }
    }

    &:focus,
    &:active {
      &:before {
        background: ${hexToRGB(Theme.Color.Ocean, 0.18)};
      }
    }
  }
`;

CourseCardStyle.Title = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0 0 ${Root.Size} 0;

  .ico {
    width: ${Root.Size};
    opacity: 0;
    transform: translateX(-50%);
    transition: all 0.25s ease;

    svg {
      fill: ${Theme.Color.Primary};
    }
  }
`;

CourseCardStyle.Details = styled.span`
  .details-major {
    width: 100%;
    display: flex;
    font-weight: 500;
    font-size: 1.2rem;
    color: ${Theme.Color.Tan};

    span {
      margin-right: calc(${Root.Size} / 2);
      position: relative;

      &:after {
        content: '';
        position: absolute;
        right: calc(((${Root.Size} / 2) / 2) * -1);
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: ${Theme.Color.Tan};
      }

      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }
  .details-minor {
    width: 100%;
    display: flex;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    margin-top: calc(${Root.Size} / 4);
    color: ${Theme.Color.Galaxy};

    span {
      margin-right: calc(${Root.Size} / 2);
      position: relative;
      font-size: 0.8rem;

      &:after {
        content: '';
        position: absolute;
        right: calc(((${Root.Size} / 2) / 2) * -1);
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: ${Theme.Color.Galaxy};
      }

      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }
`;

CourseCardStyle.Label = styled.span`
  border-radius: 999px;
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: ${cardPaddingY};
  top: ${cardPaddingY};
  width: calc(${Root.Size} / 2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => (props.bgColor ? props.bgColor : Theme.Color.Primary)};

  span {
    color: ${props => (props.textColor ? props.textColor : Theme.Color.White)};
    font-weight: bold;
    position: relative;
    display: block;
    flex: 1;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.75rem;

    strong {
      position: absolute;
      top: 50%;
      left: 45%;
      transform: rotate(90deg) translate(-50%, -50%);
      transform-origin: top left;
    }
  }
`;

//////////////////////////////////////////////////////////////////////
