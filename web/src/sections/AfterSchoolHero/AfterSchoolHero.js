// <AfterSchoolHero /> section:
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
  color: Theme.Color.Eggplant,
  playButton: false,
  playButtonBg: Theme.Color.Ocean,
  gear: false,
  wideImage: true,
  bgMatch: 'kid-remote-control.jpg',
};

const AfterSchoolHero = () => {
  return (
    <SplitHero {...HeroProps}>
      <h2>Play-Well After School Enrichment</h2>
      <h6 className="txt-clr-dino">
        In our Engineering with LEGO® enrichment program, take on real-life
        engineering challenges
      </h6>
      <Btn
        BgColor={Theme.Color.Nova}
        Label="Request Info"
        Destination="/contact"
        TextColor={Theme.Color.White}
        Size="large"
      />
    </SplitHero>
  );
};

export default AfterSchoolHero;

//////////////////////////////////////////////////////////////////////
// End Component
