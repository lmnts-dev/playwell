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
  maxWidth
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
`;

Button.displayName = 'Button';

export const Text = styled('div')`
  box-sizing: border-box;
  transition: all ${Theme.Base.Transition.Duration};
  ${space}
  ${color}
  ${textAlign}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
`;

Box.displayName = 'Text';

//////////////////////////////////////////////////////////////////////
// End Component
