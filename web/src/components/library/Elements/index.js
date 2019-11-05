/* eslint-disable */

// Elements:
// Box and Flex layout components using Styled System

// Imports
//////////////////////////////////////////////////////////////////////

import styled from 'styled-components';
import {
  space,
  color,
  width,
  flex,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  textAlign,
  fontSize,
  fontWeight,
  lineHeight,
  maxWidth,
  display,
  position,
  overflow
} from 'styled-system';

import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Box = styled('div')`
  box-sizing: border-box;
  transition: all ${Theme.Base.Transition.Duration};
  ${space}
  ${width}
  ${color}
  ${flex}
  ${alignSelf}
  ${textAlign}
  ${maxWidth}
  ${fontSize}
  ${display}
  ${position}
`;

Box.displayName = 'Box';

export const Flex = styled('div')`
  display: flex;
  ${space}
  ${color}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${maxWidth}
  ${width}
  ${fontSize}
  ${textAlign}
  ${overflow}
`;

Flex.displayName = 'Flex';

export const Button = styled('button')`
  border-radius: 1000rem;
  border: none;
  font-weight: 700;
  font-size: 1.25rem;
  ${space}
  ${width}
  ${color}
  ${overflow}
`;

Button.displayName = 'Button';

export const Heading = styled('div')`
  box-sizing: border-box;
  font-weight: 600;
  display: block;
  transition: all ${Theme.Base.Transition.Duration};
  ${space}
  ${color}
  ${textAlign}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${maxWidth}
  ${width}
`;

Box.displayName = 'Heading';

export const Text = styled('div')`
  box-sizing: border-box;
  font-weight: 500;
  display: block;
  transition: all ${Theme.Base.Transition.Duration};
  ${space}
  ${color}
  ${textAlign}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${maxWidth}
  ${width}
`;

Box.displayName = 'Text';

//////////////////////////////////////////////////////////////////////
// End Component
