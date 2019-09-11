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

    &:hover {
      background: ${hexToRGB(Theme.Color.Black, 0.02)};
    }

    &:focus,
    &:active {
      background: ${hexToRGB(Theme.Color.Black, 0.04)};
    }
  }
`;

CourseCardStyle.Title = styled.span`
  display: block;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0 0 ${Root.Size} 0;
`;

CourseCardStyle.Details = styled.span`
  display: flex;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${Theme.Color.Tan};
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
