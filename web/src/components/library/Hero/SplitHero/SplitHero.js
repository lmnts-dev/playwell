// SplitHero Component:
// Hero with 50/50 split and directional layout

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Helpers
import HeroContainer from '../HeroContainer';

// Styles
import { GearContainer } from './styles.scss';

// Components
import GearRotator from 'components/library/GearRotator';
import PlayButton from 'components/library/Hero/PlayButton';
import ImgMatch from 'components/core/ImgMatch';
import ImgQuery from 'components/core/ImgQuery';
import { Box, Flex } from 'components/library/Elements';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SplitHero = ({
  bg,
  bgMatch,
  bgQuery,
  bgAlt,
  children,
  color,
  flexDirection,
  gear,
  playButtonBg,
  px,
  textAlign,
  withMask,
  heroHeight,
  playButton,
}) => (
  <HeroContainer
    withMask={withMask}
    bg={bg}
    px={px}
    color={color}
    textAlign={textAlign}
    heroHeight={heroHeight}
  >
    <Flex
      width={1}
      flexWrap="wrap"
      flexDirection={flexDirection}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width={[1, 1, 1, 6 / 10]}
        pr={[0, 0, 2, 4, 10]}
        pl={[0, 0, 2, 6, 9]}
        pb={[2, 2, 0, 0]}
      >
        {children}
      </Box>
      <Box
        width={[1, 1, 1, 4 / 10]}
        px={[0, 1, 4, 0]}
        css={{ position: 'relative' }}
      >
        <Box
          width={1}
          py={300}
          bg={['white', 'indigo', 'blue', 'aqua', 'black']}
          className='feature-image'
          css={{
            borderRadius: '60px 7px 7px 7px',
            position: 'relative',
            zIndex: 1,
            overflow: 'hidden',
          }}
        >
          {bgMatch ? (
            <div className="section-img">
              <ImgMatch src={bgMatch} AltText={bgAlt} className="hero-img" />
            </div>
          ) : null}
          {bgQuery ? (
            <div className="section-img">
              <ImgQuery src={bgQuery} AltText={bgAlt} className="hero-img" />
            </div>
          ) : null}
        </Box>
        {gear ? (
          <GearContainer>
            <GearRotator strokeColor={props => props.theme.Color.White} />
          </GearContainer>
        ) : null}
        {playButton == true ? <PlayButton bg={playButtonBg} /> : false}
      </Box>
    </Flex>
  </HeroContainer>
);

SplitHero.defaultProps = {
  flexDirection: 'row',
  playButtonBg: 'Nova',
};

export default SplitHero;

//////////////////////////////////////////////////////////////////////
// End Component
