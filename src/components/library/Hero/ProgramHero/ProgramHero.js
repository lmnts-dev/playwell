// ProgramHero Component:
// This is a specific hero component for program overview pages

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link } from 'gatsby';

// Helpers
import { HeroInner } from './../../Hero';

// Styles
import { ProgramHeroStyle } from './styles.scss';

// Components
import ImgMatch from 'components/core/ImgMatch';
import ImgQuery from 'components/core/ImgQuery';
import { Box, Flex } from 'components/library/Elements';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const ProgramHero = ({ bg, color, flexDirection, px, children }) => (
  <Box as="section" bg={bg} px={px} color={color}>
    <ProgramHeroStyle>
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
          pl={[0, 0, 1, 6, 7]}
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
    </ProgramHeroStyle>
  </Box>
);

ProgramHero.defaultProps = {
  bg: 'Sky',
  color: 'White',
  flexDirection: 'row',
  px: 1,
};

export default ProgramHero;

//////////////////////////////////////////////////////////////////////
// End Component
