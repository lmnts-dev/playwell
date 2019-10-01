// HomeIntro.js:
// Homepage introduction

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Accordion from 'components/library/Accordion';

// Sections

// Styles
import { Intro } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LocationCoordinators = () => {
  return (
    <Intro textAlign="left">
      <Accordion location="Apache Junction">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Accordion>
      <Accordion location="Avondale">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Accordion>
    </Intro>
  );
};

export default LocationCoordinators;

//////////////////////////////////////////////////////////////////////
// End Component
