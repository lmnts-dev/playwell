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
  padding: 0 calc(${Root.Size} / 2) 0 calc(${Root.Size} / 2);
  margin: 0 0 calc(${Root.Size} / 4) 0;
  border-radius: calc(${Root.Size} / 2);
  border: 1px solid ${hexToRGB(Theme.Color.Cream, 0)};
  cursor: pointer;

  &:hover {
    background: ${hexToRGB(Theme.Color.Cream, 0.2)};
    border: 1px solid ${hexToRGB(Theme.Color.Slate, 0.3)};
  }

  .row {
    display: ${props => (props.cardExpanded == true ? 'flex' : 'none')};
  }
`;

ClientCardStyle.ClientName = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: bold;
  font-size: 1.5rem;
  padding: calc(${Root.Size} / 2) 0;

  .ico {
    transform: ${props =>
      props.cardExpanded == true ? 'rotate(90deg)' : 'rotate(0deg)'};
  }
`;

//////////////////////////////////////////////////////////////////////
