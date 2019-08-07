// SplitHero Component:
// Hero with 50/50 split and directional layout

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Helpers
import HeroContainer from '../HeroContainer';

// Styles
import { SplitHeroStyle } from './styles.scss';

// Components
import CoggRotator from 'components/library/CoggRotator';
import PlayButton from 'components/library/Hero/PlayButton';
import ImgMatch from 'components/core/ImgMatch';
import ImgQuery from 'components/core/ImgQuery';
import { Box, Flex } from 'components/library/Elements';

import CoggWheel from 'components/library/CoggRotator/CoggWheel';


import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SplitHero = ({
  bg,
  color,
  flexDirection,
  px,
  children,
  BgMatch,
  BgQuery,
  BgAlt,
}) => (
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
        pb={[2, 2, 0, 0]}
      >
        {children}
      </Box>
      <Box width={[1, 1, 4 / 10, 4 / 10]} css={{ position: 'relative' }}>
        <Box
          width={1}
          py={300}
          bg={['white', 'indigo', 'blue', 'aqua', 'black']}
          css={{
            borderRadius: '60px 7px 7px 7px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {BgMatch ? (
            <div className="section-img">
              <ImgMatch src={BgMatch} AltText={BgAlt} className="hero-img" />
            </div>
          ) : null}
          {BgQuery ? (
            <div className="section-img">
              <ImgQuery src={BgQuery} AltText={BgAlt} className="hero-img" />
            </div>
          ) : null}
        </Box>
        <CoggRotator />
        <PlayButton />
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
