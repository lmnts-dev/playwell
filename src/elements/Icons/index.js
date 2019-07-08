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
import Intercom from './SVG/Intercom';

// Begin Styles
//////////////////////////////////////////////////////////////////////

const Icon = props => {
  switch (props.Name) {
    case 'carat':
      return (
        <IconStyle className="ico">
          <Carat />
        </IconStyle>
      );
    case 'intercom':
      return (
        <IconStyle className="ico ico-intercom">
          <Intercom />
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

// const Icon = ({ name }) => {
//   <IconStyle>
//     <IconsLibrary name={name} />
//   </IconStyle>;
// };

export default Icon;

///////////////
