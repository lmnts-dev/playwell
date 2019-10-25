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
  color: Theme.Color.Eggplant,
  playButton: true,
  playButtonBg: Theme.Color.Ocean,
  gear: false,
  wideImage: true,
};

const AfterSchoolEnrichmentHero = () => {
  return (
    <SplitHero {...HeroProps}>
      <h2>How STEM Enrichment paves the way for our beliefs</h2>
      <h6 className="txt-clr-dino">
        Lorem ipsum dolor sit amet, consectetur a.
      </h6>
      <Btn
        BgColor={Theme.Color.Nova}
        Label="Request Info"
        Destination="/contact"
        TextColor={Theme.Color.White}
      />
    </SplitHero>
  );
};

export default AfterSchoolEnrichmentHero;

//////////////////////////////////////////////////////////////////////
// End Component
