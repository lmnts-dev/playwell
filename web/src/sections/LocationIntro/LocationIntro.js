// <LocationIntro /> section:
// Location detail template introduction

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import { Text } from 'components/library/Elements';

// Styles
import { Intro } from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LocationIntro = ({ pageContext }) => {
  const countyState = pageContext.isCounty
    ? pageContext.name + ', ' + pageContext.parentState.name + "'s"
    : pageContext.name + "'s";

  return (
    <Intro bg="Cream" textAlign="center">
      <Intro.Inner pt={[2, 2, 4, 4]} pb={[1, 1, 2, 2]}>
        <Text as="p" color="Nova" className="lead">
          {countyState} Leading STEM Education &amp; Engineering Programs
        </Text>
        <Text as="p" color="Galaxy" className="lead">
          Ut vehicula dictum tristique. Cras at sem nec risus sollicitudin
          varius. Proin ultrices metus arcu, ut lacinia libero ornare eget.
          Morbi orci mi, scelerisque a justo quis, euismod sollicitudin dui.
          Duis convallis magna eget eleifend tempor. Ut non lobortis metus.
          Donec sit amet vulputate risus. Vivamus et lacinia ante.
        </Text>
      </Intro.Inner>
    </Intro>
  );
};

export default LocationIntro;

//////////////////////////////////////////////////////////////////////
// End Component
