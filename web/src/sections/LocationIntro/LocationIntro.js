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

  return (
    <Intro bg="Cream" textAlign="center">
      <Intro.Inner pt={[2, 2, 4, 4]} pb={[1, 1, 2, 2]}>
        <Text as="p" color="Nova" className="lead">
          {pageContext.subheadline}
        </Text>
        <Text as="p" color="Galaxy" className="lead">
          {pageContext.description}
        </Text>
      </Intro.Inner>
    </Intro>
  );
};

export default LocationIntro;

//////////////////////////////////////////////////////////////////////
// End Component
