// GearRotator Component:
// Gear rotation animation

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Styles
import { Container, Rotator } from './styles.scss';

// Components
import { Icon } from 'components/library/Icons';

// Begin Component
//////////////////////////////////////////////////////////////////////

const GearRotator = ({ width, height, fill, strokeColor }) => (
  <Container>
    <Rotator
      width={width}
      height={height}
      fill={fill}
      strokeColor={strokeColor}
    >
      <Icon Name="gear" />
    </Rotator>
  </Container>
);

GearRotator.defaultProps = {
  width: '430px',
  height: '430px',
  fill: 'none',
  strokeColor: props => props.theme.Color.Nova,
};

export default GearRotator;

//////////////////////////////////////////////////////////////////////
// End Component
