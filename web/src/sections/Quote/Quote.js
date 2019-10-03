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
import { QuoteContainer } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Quote = ({ color, children }) => {
  // Render page
  return (
    <QuoteContainer>
      <Box px={[0, '10%', '14%', '16%', '20%']}>
        <QuoteContainer.Quote as="h2" color={color} pb={0}>
          {children}
        </QuoteContainer.Quote>
      </Box>
    </QuoteContainer>
  );
};

Quote.defaultProps = {
  color: 'Sunset',
}

export default Quote;

//////////////////////////////////////////////////////////////////////
// End Component
