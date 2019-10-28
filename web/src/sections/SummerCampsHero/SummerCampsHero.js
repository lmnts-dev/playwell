// <SummeCampsHero /> section:

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
  bg: Theme.Color.Nova,
  color: Theme.Color.White,
  playButton: true,
  playButtonBg: Theme.Color.Primary,
  gear: false,
  bgMatch: 'kid-machine.jpg',
  reversed: true,
};

const SummeCampsHero = () => {
  return (
    <SplitHero
      {...HeroProps}
      subNav={[
        { label: 'Summer Camps', active: true, link: '/programs/summer-camps' },
        { label: 'Workshops', link: '/programs/workshops' },
        { label: 'Classes', link: '/programs/classes' },
      ]}
    >
      <h2>Teams Come Together by Playing Well</h2>
      <h6 className="txt-clr-dino">
        We believe that play reveals who you are, and who you are inpires your
        work.
      </h6>
      <Btn
        BgColor={Theme.Color.Primary}
        Label="Camps near you"
        Destination="/contact"
        TextColor={Theme.Color.White}
      />
    </SplitHero>
  );
};

export default SummeCampsHero;

//////////////////////////////////////////////////////////////////////
// End Component
