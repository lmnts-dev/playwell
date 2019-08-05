import styled from 'styled-components'

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
} from 'styled-system'

export const Box = styled('div')`
  box-sizing: border-box;
  transition: all 0.3s;
  ${space}
  ${width}
  ${color}
  ${flex}
  ${alignSelf}
  ${textAlign}
`

Box.displayName = 'Box'

export const Flex = styled('div')`
  display: flex;
  ${space}
  ${color}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`

Flex.displayName = 'Flex'

export const Button = styled('button')`
  border-radius: 1000rem;
  border: none;
  font-weight: 700;
  font-size: 1.25rem;
  ${space}
  ${width}
  ${color}
`

Button.displayName = 'Button'
