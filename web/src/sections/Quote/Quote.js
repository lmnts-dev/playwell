// <Quote /> section:
// Full width quote section
// todo: break quote down into a component

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import { Box, Flex, Text } from 'components/library/Elements';

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
      <Box px={['10%', '14%', '16%', '20%']}>
        <QuoteContainer.Quote className="h2" color={color}>
          {children}
        </QuoteContainer.Quote>
      </Box>
    </QuoteContainer>
  );
};

Quote.defaultProps = {
  color: 'Sunset',
};

export default Quote;

//////////////////////////////////////////////////////////////////////
// End Component
