// Footer Component Styles:

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

// Extension
import { BtnStyle } from 'components/library/Btn/styles.scss';

// Begin Styles
//////////////////////////////////////////////////////////////////////

let bgGradient =
  'linear-gradient(180deg, ' +
  Theme.Color.Cream +
  ' 0%, rgba(255,255,255,0.00) 50%, rgba(255,255,255,0.00) 100%)';

export const ClientCardStyle = styled.div`
  background: ${props =>
    props.cardExpanded == true ? bgGradient : Theme.Color.Cream};
  border-radius: 35.5px;
  padding: 0 calc(${Root.Size} / 2);
  margin: 0 0 calc(${Root.Size} / 4) 0;
  border-radius: calc(${Root.Size} / 2);
  border: 1px solid ${hexToRGB(Theme.Color.Cream, 0)};
  cursor: pointer;

  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    padding: 0 calc(${Root.Size} / 3);
  }

  &:hover {
    background: ${hexToRGB(Theme.Color.Cream, 0.2)};
    border: 1px solid ${hexToRGB(Theme.Color.Slate, 0.3)};
  }

  .row {
    display: ${props => (props.cardExpanded == true ? 'flex' : 'none')};
  }

  &.focus {
    border: 1px solid ${Theme.Color.Ocean};
    box-shadow: 0 0 10px 10px ${hexToRGB(Theme.Color.Ocean, 0.2)};
  }

  .anchor {
    display: block;
    height: 50vh; /*same height as header*/
    margin-top: -50vh; /*same height as header*/
    visibility: hidden;
  }
`;

ClientCardStyle.ClientName = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  font-weight: bold;
  font-size: 1.5rem;
  padding: calc(${Root.Size} / 2) 0;
  @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    padding: calc(${Root.Size} / 3) 0;
    flex-direction: column;
    align-items: flex-start;
  }

  .ico {
    transform: ${props =>
      props.cardExpanded == true ? 'rotate(90deg)' : 'rotate(0deg)'};
  }

  .client-counts {
    display: flex;
    align-items: center;
    @media (max-width: ${Theme.Base.Media.Width.Md}) {
      span:first-of-type {
        font-size: 16px;
      }
    }
    @media (max-width: ${Theme.Base.Media.Width.Sm}) {
      span:last-of-type {
        position: absolute;
        right: calc(${Root.Size} / -15);
        top: calc(${Root.Size} / 5);
      }
      span:first-of-type {
      //  margin-top: calc(${Root.Size} / 5);
        position: absolute;
        left: 0;
        top: calc(${Root.Size} / 5);
      }
    }
  }

  .client-name {
    display: flex;
    flex-direction: column;
    @media (max-width: ${Theme.Base.Media.Width.Sm}) {
    //  width: calc(100% - calc(${Root.Size} / 1.5));
      margin-top: calc(${Root.Size} * .75);
    }

    .subtitle-list {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 500;
      color: ${Theme.Color.Tan};
      margin-bottom: calc(${Root.Size} / 4);

      span:first-of-type {
        margin-right: calc(${Root.Size} / 2);
        position: relative;
        @media (max-width: ${Theme.Base.Media.Width.Sm}) {
          //  margin-right: 0;
          //  display: block;
        }

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
          @media (max-width: ${Theme.Base.Media.Width.Sm}) {
            //  content: none;
          }
        }

        &:last-child {
          &:after {
            display: none;
          }
        }
      }
    }
  }
`;

ClientCardStyle.CourseCount = styled.span`
  height: calc(${Root.Size} / 2);
  width: calc(${Root.Size} / 2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  line-height: 0;
  padding-top: 6px;
  justify-content: center;
  font-weight: bold;
  background: ${props => (props.bgColor ? props.bgColor : Theme.Color.Slate)};
  color: ${props => (props.textColor ? props.textColor : Theme.Color.White)};
  margin-right: calc(${Root.Size} / 3);
`;

//////////////////////////////////////////////////////////////////////
