// <OrganizationsHero /> section:

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
  bgMatch: 'baby-biljetter.jpg',
  color: Theme.Color.Primary,
  playButton: false,
  playButtonBg: Theme.Color.Ocean,
  gear: false,
  reversed: true,
  subNavColor: Theme.Color.Nova,
  arrowColor: Theme.Color.Nova,
};

const OrganizationsHero = () => {
  return (
    <SplitHero
      {...HeroProps}
      subNav={[
        { label: 'team building', link: '/team-building' },
        {
          label: 'organizations',
          active: true,
          link: '/team-building/organizations',
        },
        { label: 'sports teams', link: '/team-building/sports-teams' },
        { label: 'non-profits', link: '/team-building/non-profits' },
      ]}
    >
      <h2>Bring purposeful play to your organization</h2>
      <h6 className="txt-clr-dino">
        We have partnered with boy scouts, girl scouts, and other organizations.
      </h6>
      <Btn
        Label="Request Info"
        BgColor={Theme.Color.Nova}
        TextColor={Theme.Color.White}
        Size="large"
      />
    </SplitHero>
  );
};

export default OrganizationsHero;

//////////////////////////////////////////////////////////////////////
// End Component
