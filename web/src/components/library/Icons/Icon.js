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
import BasicLego from './SVG/BasicLego';
import Intercom from './SVG/Intercom';
import NextArrow from './SVG/NextArrow';
import Swoop from './SVG/Swoop';

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const Icon = props => {
  switch (props.Name) {
    case 'carat':
      return (
        <IconStyle className={'ico ' + props.className ? props.className : null}>
          <Carat />
        </IconStyle>
      );
    case 'gear':
      return (
        <IconStyle className="ico ico-gear">
          <Gear />
        </IconStyle>
      );
    case 'intercom':
      return (
        <IconStyle className="ico ico-intercom">
          <Intercom />
        </IconStyle>
      );
    case 'swoop':
      return (
        <IconStyle className="ico ico-swoop">
          <Swoop />
        </IconStyle>
      );
    case 'nextArrow':
      return (
        <IconStyle className="ico">
          <NextArrow />
        </IconStyle>
      );
    case 'basicLego':
      return (
        <IconStyle className="ico ico-lego" legoColor={props.Color}>
          <BasicLego />
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
