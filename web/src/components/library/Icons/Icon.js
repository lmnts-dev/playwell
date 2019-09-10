// Icons Component:
// https://fontawesome.com/icons/
// Add custom icons via 'case'.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Styles
import IconStyle from './styles.scss';

// Icon Files
import Carat from './SVG/Carat';
import Gear from './SVG/Gear';
import Intercom from './SVG/Intercom';
import Next from './SVG/Next';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Icon = props => {
  switch (props.Name) {
    case 'carat':
      return (
        <IconStyle className="ico">
          <Carat />
        </IconStyle>
      );
    case 'gear':
      return (
        <IconStyle className="ico">
          <Gear />
        </IconStyle>
      );
    case 'intercom':
      return (
        <IconStyle className="ico ico-intercom">
          <Intercom />
        </IconStyle>
      );
    case 'next':
      return (
        <IconStyle className="ico">
          <Next />
        </IconStyle>
      );
    default:
      return (
        <IconStyle Color={props.Color} className="ico">
          <i
            className={
              props.fas ? 'fas fa-' + props.Name : 'fas fab fa-' + props.Name
            }
          />
        </IconStyle>
      );
  }
};

///////////////
