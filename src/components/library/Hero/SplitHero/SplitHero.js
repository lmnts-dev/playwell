// SplitHero Component:
// Hero with 50/50 split and directional layout

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Helpers
import HeroContainer from '../Hero';

// Styles
import { SplitHeroStyle } from './styles.scss';

// Components
import ImgMatch from 'components/core/ImgMatch';
import ImgQuery from 'components/core/ImgQuery';
import { Box, Flex } from 'components/library/Elements';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SplitHero = ({ bg, color, flexDirection, px, children }) => (
  <HeroContainer bg={bg} px={px} color={color}>
    <Flex
      width={1}
      flexWrap="wrap"
      flexDirection={flexDirection}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width={[1, 1, 6 / 10, 6 / 10]}
        pr={[0, 0, 2, 4, 5]}
        pl={[0, 0, 2, 6, 10]}
      >
        {children}
      </Box>
      <Box
        width={[1, 1, 4 / 10, 4 / 10]}
        py={200}
        bg={['white', 'blue', 'green', 'black', 'red']}
      >
        Image
      </Box>
    </Flex>
  </HeroContainer>
);

SplitHero.defaultProps = {
  flexDirection: 'row',
};

export default SplitHero;

//////////////////////////////////////////////////////////////////////
// End Component
