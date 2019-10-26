// <LocationCoordinators /> section:
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
import { Decorator } from '../../templates/Location/styles.scss';

// Helpers
import slugify from 'helpers/slugify';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// Props
const HeroProps = {
  arrowColor: Theme.Color.Nova,
  bg: Theme.Color.Cream,
  color: Theme.Color.Primary,
  playButton: false,
  playButtonBg: Theme.Color.Nova,
  gear: false,
  subNavColor: Theme.Color.Eggplant,
  bgMatch: 'happy-adult.jpg',
};

const HostProgramHero = ({ cities, pageContext }) => {
  return (
    <SplitHero
      {...HeroProps}
      subNav={[
        { label: 'after school programs', active: true, link: '/host-a-program' },
        { label: 'recreation centers', link: '/recreation-centers' },
        { label: 'homeschool classes', link: '/homeschool-classes' },
      ]}
    >
      <h2>Hosting a Play-Well Program</h2>
      <h6>
        We offer many options for hosting your programs at your location or at
        one of our activity centers.
      </h6>
      <Btn
        BgColor={Theme.Color.Nova}
        Label="Get in Touch"
        Destination="/contact"
        TextColor={Theme.Color.White}
      />
    </SplitHero>
  );
};

export default HostProgramHero;

//////////////////////////////////////////////////////////////////////
// End Component
