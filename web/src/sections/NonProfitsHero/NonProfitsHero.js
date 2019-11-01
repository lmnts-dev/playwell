// <NonProfitsHero /> section:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import { Box, Flex, Text } from 'components/library/Elements';
import Btn from 'components/library/Btn';
import SplitHero from 'components/library/Hero/SplitHero';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const HeroProps = {
  bg: Theme.Color.White,
  bgMatch: 'kids-lake.jpg',
  color: Theme.Color.Primary,
  playButton: false,
  playButtonBg: Theme.Color.Ocean,
  gear: false,
  reversed: true,
  wideImage: true,
  subNavColor: Theme.Color.Nova,
  arrowColor: Theme.Color.Nova,
};

const NonProfitsHero = () => {
  return (
    <SplitHero
      {...HeroProps}
      subNav={[
        { label: 'team building', link: '/team-building' },
        { label: 'organizations', link: '/team-building/organizations' },
        { label: 'sports teams', link: '/team-building/sports-teams' },
        {
          label: 'non-profits',
          active: true,
          link: '/team-building/non-profits',
        },
      ]}
    >
      <h2>We partner with non-profits</h2>
      <h6>Educational programs for underserved communities</h6>
      <Btn
        Label="Get in Touch"
        BgColor={Theme.Color.Nova}
        TextColor={Theme.Color.White}
        Size="large"
      />
    </SplitHero>
  );
};

export default NonProfitsHero;

//////////////////////////////////////////////////////////////////////
// End Component
