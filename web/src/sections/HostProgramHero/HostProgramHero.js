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
  bg: Theme.Color.Cream,
  color: Theme.Color.Primary,
  flexDirection: 'row',
  BgAlt: 'Placeholder Image Alt',
  playButton: false,
  playButtonBg: Theme.Color.Nova,
  gear: false,
  textAlign: 'left',
  withMask: false,
  heroHeight: 'auto',
  bgMatch: 'team.jpg',
};

const HostProgramHero = ({ cities, pageContext }) => {
  return (
    <SplitHero
      {...HeroProps}
      subNav={[
        'after school programs',
        'recreation centers',
        'homeschool classes',
      ]}
    >
      <h2>We provide opportunities for creative expression</h2>
      <h6>We are passionate specialists in STEM Education.</h6>
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
