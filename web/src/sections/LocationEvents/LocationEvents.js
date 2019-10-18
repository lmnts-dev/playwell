// <LocationCoordinators /> section:
// Location detail template coordinator accordion

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Section from 'components/library/Elements/Section';
import Accordion from 'components/library/Accordion';

// Styles
import { Events } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const LocationEvents = () => {
  // Render page
  return (
    <Section textAlign="left" pt={0}>
      <Events pt={[4, 4, 8, 8]}>
        <Box width={[1, 1, 1 / 2, 4 / 10]} pr={4} pb={'var(--Size)'}>
          <Text as="h2" color="Dino">
            STEM &amp; Engineering Events Happening in Arizona
          </Text>
        </Box>
        <Box width={[1, 1, 1 / 2, 6 / 10]}>
          .<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.
          <br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.
          <br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.<br />.
          <br />.<br />
        </Box>
      </Events>
    </Section>
  );
};

export default LocationEvents;

//////////////////////////////////////////////////////////////////////
// End Component
