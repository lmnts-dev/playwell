// <TeamBuildingHero /> section:

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
  bg: Theme.Color.White,
  bgMatch: 'team-containers.jpg',
  color: Theme.Color.Primary,
  playButton: true,
  playButtonBg: Theme.Color.Ocean,
  gear: false,
  reversed: true,
  wideImage: true,
  subNavColor: Theme.Color.Nova,
  arrowColor: Theme.Color.Nova,
};

const TeamBuildingHero = () => {
  return (
    <SplitHero
      {...HeroProps}
      subNav={[
        { label: 'team building', active: true, link: '/team-building' },
        { label: 'organizations', link: '/team-building/organizations' },
        { label: 'sports teams', link: '/team-building/sports-teams' },
        { label: 'non-profits', link: '/team-building/non-profits' },
      ]}
    >
      <h2>Teams Come Together by Playing Well</h2>
      <h6 className="txt-clr-dino">
        We believe that play reveals who you are, and who you are inspires your
        work.
      </h6>
      <Btn
        Label="Get in Touch"
        BgColor={Theme.Color.Nova}
        TextColor={Theme.Color.White}
        Size="large"
        Destination="/contact"
      />
    </SplitHero>
  );
};

export default TeamBuildingHero;

//////////////////////////////////////////////////////////////////////
// End Component
