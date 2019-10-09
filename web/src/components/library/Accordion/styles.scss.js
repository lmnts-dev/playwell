// <Accordion /> Styles:
// Accordion component styles

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from 'styled-components';

// Constants
import { Theme, Root } from 'constants/Theme';
import { Base } from 'constants/styles/Base';

// Components
import { Box, Flex } from 'components/library/Elements';
import { Icon } from 'components/library/Icons';

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const AccordionContainer = styled.div``;

AccordionContainer.Inner = styled.div`
  display: flex;
  flex-direction: column;

  .rotate {
    transform: rotate(90deg);
  }
`;

AccordionContainer.Icon = styled(Icon)`
  margin-left: auto;
  transition: transform 0.3s ease;

  svg {
    fill: ${Theme.Color.Nova};
  }
`;

AccordionContainer.Accordion = styled.button`
  align-items: center;
  background: transparent;
  color: ${hexToRGB(Theme.Color.Dino, 0.7)};
  cursor: pointer;
  display: flex;
  border: none;
  outline: none;
  padding: calc(${Root.Size} / 2) calc(${Root.Size} / 3);
  transition: background-color 0.6s ease;

  @media (min-width: ${Base.Media.Width.Sm + 'px'}) {
    padding: calc(${Root.Size} / 3) calc(${Root.Size} / 4);
  }

  &:last-child {
    margin-bottom: 0;
  }

  &.active {
    color: ${Theme.Color.Dino};
  }
`;

AccordionContainer.Content = styled(Box)`
  overflow: hidden;
  transition: max-height 0.6s ease;
  border-bottom: 1px solid ${hexToRGB(Theme.Color.Sunlight, 0.5)};
`;

AccordionContainer.Content.Inner = styled.div`
  border-radius: calc(${Root.Radius} / 3);
  margin-bottom: calc(${Root.Size} / 3 );
`;

//////////////////////////////////////////////////////////////////////
// End Styles
