// <AfterSchoolEnrichmentHero /> section:
// Location detail template coordinator accordion

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import ImgMatch from 'components/core/ImgMatch';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Btn from 'components/library/Btn';
import SplitHero from 'components/library/Hero/SplitHero';

// Styles
import { Hero } from './styles.scss';

// Helpers
import slugify from 'helpers/slugify';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const HeroProps = {
  arrowColor: Theme.Color.Nova,
  bg: Theme.Color.White,
  color: Theme.Color.Dino,
  flexDirection: 'row',
  BgAlt: 'Placeholder Image Alt',
  playButton: true,
  playButtonBg: Theme.Color.Ocean,
  gear: false,
  textAlign: 'left',
  withMask: false,
  heroHeight: 'auto',
  bgMatch: 'kid-remote-control.jpg',
};

const AfterSchoolEnrichmentHero = () => {
  return (
    <SplitHero {...HeroProps}>
      <Box pr={[4, 8, 14]}>
        <Text as="h2" color="Primary">Play-Well After School Enrichment</Text>
        <h6>
          In our Engineering with LEGO&reg; enrichment program, take on real
          life engineering challenges.
        </h6>
        <Btn
          BgColor={Theme.Color.Nova}
          Label="Request Info"
          Destination="/contact"
          TextColor={Theme.Color.White}
        />
      </Box>
    </SplitHero>
  );
};

export default AfterSchoolEnrichmentHero;

//////////////////////////////////////////////////////////////////////
// End Component
